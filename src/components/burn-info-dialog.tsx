import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogClose,
    MorphingDialogContainer,
    MorphingDialogTitle,
    MorphingDialogDescription,
} from "@/components/ui/morphing-dialog"
import { HelpCircle, XIcon } from "lucide-react"

export function BurnInfoDialog({ triggerText, iconTrigger = false }: { triggerText: string, iconTrigger?: boolean }) {
    return (
        <MorphingDialog>
            {iconTrigger ? (
                <MorphingDialogTrigger
                    className="flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors mb-2"
                    ariaLabel={triggerText}
                >
                    <HelpCircle className="w-3 h-3" aria-hidden="true" />
                    {triggerText}
                </MorphingDialogTrigger>
            ) : (
                <MorphingDialogTrigger
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4"
                    ariaLabel={triggerText}
                >
                    {triggerText}
                </MorphingDialogTrigger>
            )}

            <MorphingDialogContainer>
                <MorphingDialogContent className="relative mx-4 max-w-md bg-white p-6 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl">
                    <MorphingDialogTitle className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                        What is Burn?
                    </MorphingDialogTitle>
                    <MorphingDialogDescription
                        className="mt-4 space-y-4 text-zinc-600 dark:text-zinc-400"
                    >
                        <div>
                            <strong className="text-zinc-900 dark:text-zinc-100 font-medium">
                                Burn is a place for your negative thoughts to go…
                            </strong>
                            <br />
                            and never come back.
                        </div>

                        <div className="space-y-1">
                            <strong className="text-zinc-900 dark:text-zinc-100 font-medium">
                                How does it work?
                            </strong>
                            <ul className="list-disc pl-4 space-y-1">
                                <li>You write the thought.</li>
                                <li>We light the 'digital' fire 🔥</li>
                                <li>The thought disappears. (Very satisfying.)</li>
                            </ul>
                        </div>

                        <div className="space-y-1">
                            <strong className="text-zinc-900 dark:text-zinc-100 font-medium">
                                What if it feels a little silly?
                            </strong>
                            <div>
                                It is. But sometimes silly is exactly what we need.
                            </div>
                        </div>

                        <div className="space-y-1">
                            <strong className="text-zinc-900 dark:text-zinc-100 font-medium">
                                Why would I use this?
                            </strong>
                            <div>
                                Because arguing with negative thoughts is exhausting.
                                <br />
                                Burning them is faster.
                            </div>
                        </div>
                    </MorphingDialogDescription>

                    <div className="mt-6 flex justify-end">
                        <MorphingDialogClose className="relative static bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                            Got it
                        </MorphingDialogClose>
                    </div>

                    <MorphingDialogClose
                        className="absolute right-4 top-4 p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        aria-label="Close dialog"
                    >
                        <XIcon className="h-4 w-4" aria-hidden="true" />
                    </MorphingDialogClose>
                </MorphingDialogContent>
            </MorphingDialogContainer>
        </MorphingDialog>
    )
}

