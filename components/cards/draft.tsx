'use client';
import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import Positionation from "../menus/positionation"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"


export default function Team(){
    
    return(
        <Card className="w-full h-full text-center flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="text-lg md:text-3xl">Draft</CardTitle>
                <Positionation />
            </CardHeader>
            <CardContent className="flex justify-around items-center">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={200}>
                    <div>
                        

                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={200}>


                </ResizablePanel>
            </ResizablePanelGroup>
            {/* <div className="flex flex-row">
                    <div className="me-4 text-muted-foreground">
                        <p>RB</p>
                    </div>
                    <div>
                        <p>Travis Etienne Jr.</p>
                    </div>
                </div>
                <div className="flex-1">
                    <Button className="rounded-3xl">MOVE</Button>
                </div>
                <Separator orientation="vertical" />
                <div className="hidden md:flex flex-row">
                    <div className="mx-2">
                        <p>@NYG</p>
                    </div>
                    <div>
                        <p>Sat 1:00 pm</p>
                    </div>
                </div>
                <div className="flex-1">
                    <p>59.7</p>
                </div>
                <Separator orientation = "vertical" className="hidden md:block" />
                <div className="flex-1 hidden md:block">
                    <p>Past Scores</p>
                </div> */}
            </CardContent>
            <CardFooter className="justify-center">
                <p>0x Analysis</p>
            </CardFooter>
        </Card>
    )
}