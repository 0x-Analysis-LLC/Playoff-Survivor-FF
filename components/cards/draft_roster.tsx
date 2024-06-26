import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "../ui/separator"
import { ScrollArea } from "../ui/scroll-area"


export default function DraftRoster (){

    return(
        <div className="h-full md:w-1/3 p-4 mt-16 md:mt-0 flex justify-center">
                <Card className="w-4/5 h-5/6 md:w-full md:h-full flex flex-col justify-between text-center">
                    <CardHeader className="mb-4 text-lg md:text-3xl">
                    <CardTitle>Roster</CardTitle>
                    </CardHeader>
                    <ScrollArea className="max-h-[90vh] w-full rounded-md border p-4 overflow-auto flex-1">
                        <CardContent className="flex-1 flex md:text-lg">
                            <div className="flex-1 flex justify-center items-center">
                                <p>
                                    Jokester began sneaking into the castle in the middle of the night and leaving
                                    jokes all over the place: under the king's pillow, in his soup, even in the
                                    royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                    then, one day, the people of the kingdom discovered that the jokes left by
                                    Jokester were so funny that they couldn't help but laugh. And once they
                                    started laughing, they couldn't stop.
                                </p>
                            <Separator orientation="vertical"/>
                            </div>
                            <div className="flex-1 flex justify-center items-center">
                                <p>
                                    Jokester began sneaking into the castle in the middle of the night and leaving
                                    jokes all over the place: under the king's pillow, in his soup, even in the
                                    royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                                    then, one day, the people of the kingdom discovered that the jokes left by
                                    Jokester were so funny that they couldn't help but laugh. And once they
                                    started laughing, they couldn't stop.
                                </p>
                            </div>
                        </CardContent>
                    </ScrollArea>
                    <CardFooter className="mt-4 flex justify-center">
                    <p>0x Analysis</p>
                    </CardFooter>
                </Card>
            </div>

        
    )
}