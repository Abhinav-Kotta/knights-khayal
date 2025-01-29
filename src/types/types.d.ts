// types/types.d.ts
import { Adapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

declare module "@auth/prisma-adapter" {
  interface PrismaAdapterUser {
    id: string;
    email: string;
    isAdmin: boolean;
  }

  export function PrismaAdapter(
    prisma: PrismaClient
  ): Adapter<{ id: string; email: string; isAdmin: boolean }>;
}