import { removeFavorite, updateFavorite } from "@/lib/services/favoriteService";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const numId = Number(id);

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Error. Data tidak boleh kosong!" },
      { status: 400 }
    );
  }

  const result = updateFavorite(numId, body);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json(result.data, { status: result.status });
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const numId = Number(id);
  const result = removeFavorite(numId);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ message: "Berhasil dihapus" });
}