import { BranchDetail } from "@/features/sube-detay/components/BranchDetail";
import type { Branch } from "@/data/branches";

type BranchDetailPageWrapperProps = Readonly<{
  branch: Branch;
}>;

export default function BranchDetailPageWrapper({
  branch,
}: BranchDetailPageWrapperProps) {
  return <BranchDetail branch={branch} />;
}
