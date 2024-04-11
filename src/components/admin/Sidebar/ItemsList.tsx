import Tile from "@/components/Tile";

export default function AdminItemList() {
  return (
    <>
      <Tile title="DashBoard" href="/dashboard" />
      <Tile title="Product" href="/product" />
      <Tile title="Active Users" href="/users/active" />
      <Tile title="InActive Users" href="/users/inactive" />
    </>
  )
}
