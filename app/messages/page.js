import { messages } from "@/lib/db";
import { deleteMessageAction } from "./actions";

export default async function MessagesPage({ searchParams }) {
  const { status } = await searchParams;

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Pesan Masuk</h1>

      {status === "deleted" && (
        <p className="mt-4 rounded-md border border-green-600 bg-green-50 px-4 py-2 text-sm text-green-700">
          Pesan berhasil dihapus
        </p>
      )}

      <div className="mt-8 space-y-4">
        {messages.length === 0 ? (
          <p className="text-muted-foreground">Belum ada pesan masuk.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="rounded-lg border p-4">
              <p className="font-medium">{msg.name} — {msg.email}</p>
              <p className="mt-1 text-sm text-muted-foreground">{msg.message}</p>

              <form action={deleteMessageAction.bind(null, msg.id)} className="mt-3">
                <button
                  type="submit"
                  className="rounded-md border px-3 py-1 text-sm hover:bg-muted"
                >
                  Hapus
                </button>
              </form>
            </div>
          ))
        )}
      </div>
    </section>
  );
}