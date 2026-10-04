export function validateFavoriteInput(body) {
  if (!body || typeof body !== "object" || Object.keys(body).length === 0) {
    return { valid: false, error: "Body request tidak boleh kosong" };
  }

  if (!body.id || !body.name) {
    return { valid: false, error: "id dan name wajib diisi" };
  }

  return { valid: true };
}

export function validateNoteInput(body) {
  if (!body || typeof body.note !== "string") {
    return { valid: false, error: "Field 'note' wajib diisi dan bertipe string" };
  }

  return { valid: true };
}