import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Contact2Icon, Home, HomeIcon, Package, Package2, PanelBottom, Settings, Settings2, ShoppingBag, User, Users } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

export function SideBar() {

    return (
        <div className="flex w-full flex-col bg-muted/40">

            <aside className='hidden
             sm:flex justify-between flex-col items-center
              fixed inset-y-0  z-10 w-14 border-r-2 bg-background'>

                <nav className='flex flex-col items-center gap-4  px-2 py-5'>
                    <TooltipProvider>
                        <Link href='#' className='flex items-center justify-center h-9 w-9 bg-primary text-primary-foreground rounded-full'>
                            <Package className='w-4 h-4' />
                            <span className='sr-only'>DashBoard Avatar</span>
                        </Link>

                        <Tooltip>
                            <TooltipTrigger>
                                <Link href='#' className='flex items-center justify-center
                                h-9 w-9 rounded-full text-muted-foreground transition-colors
                                hover:text-foreground
                                '>
                                    <HomeIcon className='w-5 h-5' />
                                    <span className='sr-only'>Inicio</span>
                                </Link>
                            </TooltipTrigger>

                            <TooltipContent side='right'>Inicio</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Link href='#' className='flex items-center justify-center
                                h-9 w-9 rounded-full text-muted-foreground transition-colors
                                hover:text-foreground
                                '>
                                    <ShoppingBag className='w-5 h-5' />
                                    <span className='sr-only'>Pedidos</span>
                                </Link>
                            </TooltipTrigger>

                            <TooltipContent side='right'>Pedidos</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Link href='#' className='flex items-center justify-center
                                h-9 w-9 rounded-full text-muted-foreground transition-colors
                                hover:text-foreground
                                '>
                                    <Package className='w-5 h-5' />
                                    <span className='sr-only'>Produtos</span>
                                </Link>
                            </TooltipTrigger>

                            <TooltipContent side='right'>Produtos</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Link href='#' className='flex items-center justify-center
                                h-9 w-9 rounded-full text-muted-foreground transition-colors
                                hover:text-foreground
                                '>
                                    <Users className='w-5 h-5' />
                                    <span className='sr-only'>Clientes</span>
                                </Link>
                            </TooltipTrigger>

                            <TooltipContent side='right'>Clientes</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger>
                                <Link href='#' className='flex items-center justify-center
                                h-9 w-9 rounded-full text-muted-foreground transition-colors
                                hover:text-foreground
                                '>
                                    <Contact2Icon className='w-5 h-5' />
                                    <span className='sr-only'>Contatos</span>
                                </Link>
                            </TooltipTrigger>

                            <TooltipContent side='right'>Contatos</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>

                <nav className='gap-4  px-2 py-5'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Link href='#' className='flex items-center justify-center
                                h-9 w-9 rounded-full text-muted-foreground transition-colors
                                hover:text-foreground
                                '>
                                    <Settings className='w-5 h-5' />
                                    <span className='sr-only'>Configurações</span>
                                </Link>
                            </TooltipTrigger>

                            <TooltipContent side='right'>Configurações</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>



            {/*------------------------------------------------------Side bar MOBLIE ------------------------------------------------*/}
            <div className=" sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className='sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 
                sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6
                '>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size={'icon'} variant={'outline'} className='sm:hidden'>
                                <PanelBottom />
                                <span className='sr-only'>Open or close</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side={'left'} className='sm:max-w-xs'>

                            <SheetHeader>
                                <SheetTitle>Uk Unfast</SheetTitle>
                            </SheetHeader>

                            <nav className='grid gap-6 text-lg font-medium'>
                                <Link className='flex items-center justify-center gap-4 h-10 w-10 rounded-full bg-primary
                                 text-primary-foreground md:text-base' href='#' prefetch={false}>
                                    <Package className='h-5 w-5 transition-all' />
                                    <span className='sr-only'>Logo</span>
                                </Link>

                                <Link className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' href='#' prefetch={false}>
                                    <Home className='h-5 w-5 transition-all' />
                                    <span className=''>Home</span>
                                </Link>

                                <Link className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' href='#' prefetch={false}>
                                    <ShoppingBag className='h-5 w-5 transition-all' />
                                    <span className=''>Pedidos</span>
                                </Link>

                                <Link className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' href='#' prefetch={false}>
                                    <Package2 className='h-5 w-5 transition-all' />
                                    <span className=''>Produtos</span>
                                </Link>

                                <Link className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' href='#' prefetch={false}>
                                    <Users className='h-5 w-5 transition-all' />
                                    <span className=''>Clientes</span>
                                </Link>

                                <Link className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground' href='#' prefetch={false}>
                                    <Settings2 className='h-5 w-5 transition-all' />
                                    <span className=''>Configurações</span>
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>
            </div>
        </div>
    )
}