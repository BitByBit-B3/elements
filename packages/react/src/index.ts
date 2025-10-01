// Core exports - will be available after building the core package
// export * from '@bitbybit-b3/elements-core';

// Utilities
export { cn } from './lib/utils';

// Hooks
export { useIsMobile } from './hooks/use-mobile';
export { useToast, toast } from './hooks/use-toast';

// UI Components
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion';
export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger
} from './components/ui/alert-dialog';
export { Alert, AlertTitle, AlertDescription } from './components/ui/alert';
export { AspectRatio } from './components/ui/aspect-ratio';
export { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar';
export { Badge, badgeVariants } from './components/ui/badge';
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
} from './components/ui/breadcrumb';
export { Button, buttonVariants } from './components/ui/button';
export { Calendar } from './components/ui/calendar';
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './components/ui/card';
export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from './components/ui/carousel';
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle
} from './components/ui/chart';
export { Checkbox } from './components/ui/checkbox';
export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './components/ui/collapsible';
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator
} from './components/ui/command';
export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup
} from './components/ui/context-menu';
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
} from './components/ui/dialog';
export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription
} from './components/ui/drawer';
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup
} from './components/ui/dropdown-menu';
export {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
  useFormField
} from './components/ui/form';
export { HoverCard, HoverCardTrigger, HoverCardContent } from './components/ui/hover-card';
export { Input } from './components/ui/input';
export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator
} from './components/ui/input-otp';
export { Label } from './components/ui/label';
export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut
} from './components/ui/menubar';
export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from './components/ui/navigation-menu';
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from './components/ui/pagination';
export { Popover, PopoverTrigger, PopoverContent } from './components/ui/popover';
export { Progress } from './components/ui/progress';
export { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle
} from './components/ui/resizable';
export { ScrollArea, ScrollBar } from './components/ui/scroll-area';
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton
} from './components/ui/select';
export { Separator } from './components/ui/separator';
export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
} from './components/ui/sheet';
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar
} from './components/ui/sidebar';
export { Skeleton } from './components/ui/skeleton';
export { Slider } from './components/ui/slider';
export { Toaster as Sonner } from './components/ui/sonner';
export { Switch } from './components/ui/switch';
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
} from './components/ui/table';
export { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';
export { Textarea } from './components/ui/textarea';
export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from './components/ui/toast';
export { Toaster } from './components/ui/toaster';
export { Toggle, toggleVariants } from './components/ui/toggle';
export { ToggleGroup, ToggleGroupItem } from './components/ui/toggle-group';
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from './components/ui/tooltip';

// Version
export const version = '0.1.0';
