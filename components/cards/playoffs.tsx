import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter } from "@/components/ui/card"

export default function Playoffs(){
    return(
        <Card className="bg-background w-full md:w-5/6 h-full md:bg-secondary text-center flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="text-3xl">
                    <span className="mx-2 md:mx-3">NFL</span>
                    <span>Playoffs</span>
                </CardTitle>
                <CardDescription className="hidden md:block text-accent-foreground">Keep track of this year's playoff bracket towards Super Bowl LVII</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Bracket</p>
            </CardContent>
            <CardFooter className="justify-center">
                <p>0x Analysis</p>
            </CardFooter>
        </Card>

    )

}