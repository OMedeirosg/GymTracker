"use client";
import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progressions } from "@/types/ProgressionsData";
import { fetchProgressions } from "@/data/searchProgressions";

export const ProgressionsTable = () => {
  const { data, isLoading, error } = useQuery<Progressions[]>({
    queryKey: ["progressions"],
    queryFn: fetchProgressions
  });

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao buscar dados!</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Data de Criação</TableHead>
          <TableHead>Início</TableHead>
          <TableHead>Última Atualização</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((progression) => (
          <TableRow key={progression.id}>
            <TableCell>{progression.name}</TableCell>
            <TableCell>{progression.dataCreation.toLocaleDateString()}</TableCell>
            <TableCell>{progression.dataStart.toLocaleDateString()}</TableCell>
            <TableCell>{progression.dataUpdated.toLocaleDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
