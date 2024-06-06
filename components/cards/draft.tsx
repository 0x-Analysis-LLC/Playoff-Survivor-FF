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
            </CardContent>
            <CardFooter className="justify-center">
                <p>0x Analysis</p>
            </CardFooter>
        </Card>
    )
}