import { Navbar } from "../components/Navbar";
import Typography from "../components/Typography";


export default function GettingStarted() {
	return (
		<>
			<Navbar />
			<div className="container mx-auto max-w-4xl px-4 py-12 md:py-16 lg:py-20">
      <div className="space-y-8">
        <div>
          <Typography variant='h1'>Getting Started</Typography>
          <Typography variant="p" className="mt-4 text-muted-foreground">
            This guide will help you get started with our product. Follow the steps below
            to set up and start using our features. We're currently using a 
            monorepo structure, where phoenix hosts our backend, and our
            frontend exists in the assets/ directory for simplicity. 
            This makes it easy for anyone to grab the project from Github,
            grab the dependencies, and get started as quickly as possible.
          </Typography>
        </div>
        <div className="grid gap-6">
          <Typography variant="h2">Custom Hooks</Typography>
          <Typography variant="p" className="mt-4 text-muted-foreground">
            There are a mariad of custom hooks built into this project 
            to teach better coding practices.
            This is basically just a wrapper to make querying the backend 
            easier, using the predifined route: <Typography variant="inlinecode">/api/v1</Typography>. All backend calls to 
            Elixir Phoenix are usually hosted using this suffix.
          </Typography>
        </div>
        <div className="grid gap-6">
          <Typography variant="h2">Creating New Routes</Typography>
          <Typography variant="p" className="mt-4 text-muted-foreground">
            There are two things that you need to know before creating routes:
            How Phoenix determines what route is available, and how to render
            the route itself using React Router. The base router for pheonix 
            exists in the lib/test_playground_web/router.ex file. All routes 
            added to the routes.tsx file needs to also be declared there. 
          </Typography>
          <Typography variant="p" className="mt-4 text-muted-foreground">
            The router.ex is also where you determine the permissions needed
            to access those pages.
          </Typography>
        </div>
        <div className="grid gap-6">
          <Typography variant="h3">New Permissions</Typography>
          <Typography variant="p" className="mt-4 text-muted-foreground">
            There are two things that you need to know before creating routes:
            How Phoenix determines what route is available, and how to render
            the route itself using React Router. The base router for pheonix 
            exists in the lib/test_playground_web/router.ex file. All routes 
            added to the routes.tsx file needs to also be declared there. 
          </Typography>
          <Typography variant="p" className="mt-4 text-muted-foreground">
            The router.ex is also where you determine the permissions needed
            to access those pages.
          </Typography>
        </div>
      </div>
    </div>
		</>
	)
}
