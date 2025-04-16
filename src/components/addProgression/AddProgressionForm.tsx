import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const FormularioCriacao = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Novo Treino</CardTitle>
        <CardDescription>
          Preencha os dados para criar um novo registro.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome do treino</Label>
          <Input id="nome" name="nome" placeholder="Digite o nome" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dataCriacao">Data de Criação</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
                id="dataCriacao"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Selecione uma data</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dataInicio">Data de Início</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
                id="dataInicio"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Selecione uma data</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" />
            </PopoverContent>
          </Popover>
        </div>

        {/* O quarto campo (data de atualização) não é exibido no formulário pois será preenchido automaticamente */}
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline">Cancelar</Button>
        <Button>Salvar</Button>
      </CardFooter>
    </Card>
  );
};
