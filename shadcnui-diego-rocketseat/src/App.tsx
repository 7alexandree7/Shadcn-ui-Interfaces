import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "./components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Search, PlusCircle } from 'lucide-react'
import { Label } from "./components/ui/label";

export function App() {

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold">Produtos</h1>
        <div className="flex items-center justify-between">

          <form className="flex items-center gap-2">
            <Input name="id" placeholder="Filtre pelo ID do Produto" />
            <Input name="name" placeholder="Filtre pelo Nome" />
            <Button variant='destructive'>
              <Search className="w-4 h-4 mr-2" />
              Filtrar Resultados
            </Button>
          </form>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="w-4 h-4 mr-2" />
                Novo Produto
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Novo Produto</DialogTitle>
                <DialogDescription>Criar um novo Produto no sistema</DialogDescription>
              </DialogHeader>

              <form className="space-y-6">

                <div className="grid grid-cols-4 items-center text-right gap-3">
                  <Label htmlFor="name">Produto</Label>
                  <Input className="col-span-3" id="name" />
                </div>

                <div className="grid grid-cols-4 items-center text-right gap-3">
                  <Label htmlFor="price">Preço</Label>
                  <Input className="col-span-3" id="price" />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant='outline'>Cancelar</Button>
                  </DialogClose>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

        </div>

        <div className="border rounded-lg p-2">
          <Table>
            <TableHeader>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
            </TableHeader>

            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow>
                    <TableCell>{Math.random()}</TableCell>
                    <TableCell>Produto {i}</TableCell>
                    <TableCell>R$ 192,00</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}


