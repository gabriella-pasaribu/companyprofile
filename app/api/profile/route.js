const profile = [
    { id: 1, name: "Gaby", role: "peserta bootcamp", favoriteTech: ["Next.js", "Tailwind CSS"] } ,
];

export async function GET() {
    return Response.json(profile);
}