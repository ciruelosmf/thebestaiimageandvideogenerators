import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    style={{ clipPath: 'polygon(3% 0%, 98% 0%, 100% 3%, 100% 98%, 98% 100%, 3% 100%, 0% 98%, 0% 3%)' }}
    className={cn(
      "flex flex-col bg-slate-50/80 text-black border-2 border-indigo-100 shadow-lg relative overflow-hidden",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"



const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col text-black space-y-1.5   lg:px-2 p-2   relative z-10 ", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"



const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(" xl:text-3xl text-lg font-semibold text-black pb-0.5 leading-none tracking-tight mb-1", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"



const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("lg:text-l text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-2   flex-grow   rounded-3xl relative z-10", className)}
    {...props}
  />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-4 pt-0 relative z-10  ", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }