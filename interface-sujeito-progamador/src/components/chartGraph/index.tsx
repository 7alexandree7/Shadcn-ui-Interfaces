"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { DollarSignIcon, EuroIcon } from 'lucide-react'
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '../ui/chart'
import { type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function ChartGraph() {

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig


  return (

    <section className="mt-4 flex flex-col
    md:flex-row gap-4
    ">
      <Card className=' w-full md:w-1/2 md:max-w-[900px]'>
        <CardHeader>
          <div className='flex items-center justify-center'>
            <CardTitle className='text-lg sm:text-xl text-gray-600'>Overview Vendas</CardTitle>
            <DollarSignIcon className='ml-auto w-4 h-4 ' />
          </div>
        </CardHeader>

        <CardContent>
          <ChartContainer className='min-h-[200px] w-full' config={chartConfig}>
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey='month'
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>

          </ChartContainer>
        </CardContent>
      </Card>

      <Card className='flex-1'>
        <CardHeader>
          <div className='flex items-center justify-center'>
            <CardTitle className='text-lg sm:text-xl text-gray-600'>Ultimos Clientes</CardTitle>
            <EuroIcon className='ml-auto w-4 h-4 ' />
          </div>

          <CardDescription>
            Novos Clientes nas Ultimas 24 horas
          </CardDescription>
        </CardHeader>

        <CardContent>
          <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>HP</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm sm:text-base font-semibold'>Hyper 19</p>
              <span className='text-[12px] sm:text-sm text-gray-400'>teste@teste.com</span>
            </div>
          </article>

          <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src="https://github.com/7alexandree7.png" alt="@shadcn" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm sm:text-base font-semibold'>Space Dash</p>
              <span className='text-[12px] sm:text-sm text-gray-400'>teste@teste.com</span>
            </div>
          </article>

          <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src="https://github.com/Thauan.png" alt="@shadcn" />
              <AvatarFallback>TH</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm sm:text-base font-semibold'>Thaun Almeida</p>
              <span className='text-[12px] sm:text-sm text-gray-400'>thaun28br@gmail.com</span>
            </div>
          </article>
          <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src="https://github.com/TsumeKuromaki.png" alt="@shadcn" />
              <AvatarFallback>UK</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm sm:text-base font-semibold'>Tsume kuromaki</p>
              <span className='text-[12px] sm:text-sm text-gray-400'>teste@teste.com</span>
            </div>
          </article>
          <article className='flex items-center gap-2 border-b py-2'>
            <Avatar className='w-8 h-8'>
              <AvatarImage src="https://github.com/yuuta-kinoshi.png" alt="@shadcn" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm sm:text-base font-semibold'>Yuuta Kinoshi
              </p>
              <span className='text-[12px] sm:text-sm text-gray-400'>teste@teste.com</span>
            </div>
          </article>
        </CardContent>
      </Card>


    </section>
  )
}
