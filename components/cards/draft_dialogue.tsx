'use client';
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  export default function DraftDialogue(){
    const router = useRouter();
    const handleDraftClick = () => {
        router.push('/team/draft/qb');
      };
    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button className="h-12 w-[30vw] text-center" >DRAFT</Button>
            </DialogTrigger>
            <DialogContent className="overflow-auto max-h-screen bg-muted md:w-1/2 max-w-none w-full">
                <DialogHeader>
                <DialogTitle>Draft Info</DialogTitle>
                <DialogDescription>
                    2023 Fantasy Survivor Playoffs Draft
                </DialogDescription>
                </DialogHeader>
                <div className="">
                    <div className="mb-4">
                    <DialogTitle>Roster Requirements</DialogTitle>
                        <ul className="list-disc list-inside ms-4 my-4">
                            <li>3 QBs</li>
                            <li>4 RBs</li>
                            <li>4 WRs</li>
                            <li>2 TEs</li>
                            <li>2 FLEXs</li>
                            <li>2 DEFs</li>
                            <li>2 Ks</li>
                        </ul>
                        <p>Your roster will be located on the next screen to the left, 
                            so dont feel obligated to remember this.</p>
                    </div>
                    <div className="mb-4">
                    <DialogTitle className="my-4">Draft Rules</DialogTitle>
                    <p>There really isn't any but here are some general reminders, in case you forgot!</p>
                        <ul className="list-disc list-inside ms-4 my-4">
                            <li>Your team can have the same player(s) as another team</li>
                            <li>You cannot draft a player more than once</li>
                            <li>You can only select from team's that are in the playoffs</li>
                            <li>If you have a player that you can't find please email me <a href='mailto:nathanfitz6@gmail.com' className="text-indigo-200 hover:underline">nathanfitz6@gmail.com</a> </li>
                            <li>Once the NFL playoffs start (January 13th) rosters are LOCKED</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                    <DialogTitle>Editing Your Team</DialogTitle>
                    <p className="mt-4">After drafting and before the NFL playoffs begin, you can always come back here to edit your roster; 
                    Re-Enter the draft portal, and you'll have the ability to drop or add players. 
                    Don't worry your roster won't reset and you won't need to redraft. It's just a temporary solution for roster editing. 
                    Goodluck and hope you enjoy ! 😁 
                    </p>
                    </div>
                </div>
                <DialogFooter>
                <Button type="button" onClick ={handleDraftClick} variant="destructive" size="lg">Enter Draft</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
  }