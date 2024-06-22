import React from "react";
import { Navbar } from "@/components/Navbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

type User = {
	username: string;
	firstName: string;
	lastName: string;
	website: string;
};

import useApiQuery from "@/hooks/useApiQuery";

const App = () => {
  const { data: data } = useApiQuery("/users", {
    refetchOnWindowFocus: false,
  });
  const user: User = data?.data[0];
  return (
    <section>
      <Navbar />
      <Dialog>
        <h1>Button:</h1>
        <DialogTrigger>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hello {user?.username}!</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Welcome, {`${user?.firstName} ${user?.lastName}`}! This is an example application using React.js and Phoenix.
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={() => window.open(user?.website, "_blank")} variant="default">Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};
export default App;
