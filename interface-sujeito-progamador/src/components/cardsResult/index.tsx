import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BoxIcon, DollarSign, PhoneCallIcon, Users2 } from "lucide-react";

export function CardsResult() {
    return (
        <section className="grid grid-cols-2 gap-4
    lg:grid-cols-4
    ">
            <Card>
                <CardHeader>
                    <div className="flex items-center, justify-center">
                        <CardTitle className="text-lg sm:text-xl text-gray-600">Total De Vendas</CardTitle>
                        <DollarSign className="text-gray-600 ml-auto" />
                    </div>
                    <CardDescription>
                        Total de vendas em 90 dias
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <p className="text-base sm:text-lg font-bold">R$ 40.000</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center, justify-center">
                        <CardTitle className="text-lg sm:text-xl text-gray-600">Novos Clientes</CardTitle>
                        <Users2 className="text-gray-600 ml-auto" />
                    </div>
                    <CardDescription>
                        Novos Clientes em 90 dias
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <p className="text-base sm:text-lg font-bold">430</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center, justify-center">
                        <CardTitle className="text-lg sm:text-xl text-gray-600">Pedidos Hoje</CardTitle>
                        <BoxIcon className="text-gray-600 ml-auto" />
                    </div>
                    <CardDescription>
                        Total de Pedidos Hoje
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <p className="text-base sm:text-lg font-bold">26</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex items-center, justify-center">
                        <CardTitle className="text-lg sm:text-xl text-gray-600">Reclamações</CardTitle>
                        <PhoneCallIcon className="text-gray-600 ml-auto" />
                    </div>
                    <CardDescription>
                        Total de reclamações em 90 dias
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <p className="text-base sm:text-lg font-bold">00</p>
                </CardContent>
            </Card>
        </section>
    )
}
