import React, {useState} from "react";
import { Navbar } from "@/components/Navbar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Navbar />
      <section className="w-full h-[90vh] flex items-center justify-center bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="container px-4 md:px-6 text-center md:text-left">
          <div className="max-w-2xl space-y-4 md:space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Unleash Your Digital Potential
            </h1>
            <p className="text-muted-foreground md:text-xl lg:text-2xl">
              Discover the power of our cutting-edge solutions and transform
              your business.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button
                onClick={() => setIsDialogOpen(true)}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </Button>
              <Button
                onClick={() => {
                  console.log("something else");
                }}
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm text-accent-foreground font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Welcome to our platform</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            We're excited to have you on board. Let's get started!
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default App;
