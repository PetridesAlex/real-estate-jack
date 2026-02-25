import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return <main className="mx-auto max-w-[1400px] px-5 md:px-10">{children}</main>;
}
