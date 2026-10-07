import { removeFavorite, updateFavorite } from "@/lib/services/favoriteService";

export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();

  const result = await updateFavorite(id, body);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json(result.data, { status: result.status });
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  const result = await removeFavorite(id);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ message: result.message }, { status: result.status });
}