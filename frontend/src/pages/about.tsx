import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
    return (
        <div className="space-y-8">
            <section className="space-y-2">
                <h1 className="text-sm font-bold text-foreground">このソフトについて</h1>
                <div className="flex items-center space-x-4 rounded-md border p-4">
                    <ExternalLink />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            Discord
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Azookey公式Discordサーバーに参加して、最新情報を入手する
                        </p>
                    </div>
                    <Button variant="secondary">
                        <a href="https://discord.com/invite/dY9gHuyZN5" target="_blank" rel="noopener noreferrer">
                            参加する
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    )
}