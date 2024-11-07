import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Home, Package, Package2, PanelBottom, Settings2, ShoppingBag, User, Users } from 'lucide-react'

export function SideBar() {

    return (
        <div className="flex w-full flex-col bg-muted/40">
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