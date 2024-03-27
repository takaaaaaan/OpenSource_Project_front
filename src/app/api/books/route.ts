var books = [
    { title: '吾輩は猫である', author: '夏目漱石' },
  ]
  
  export async function GET(request: Request) {
    return Response.json({ books: books }, { status: 200 })
  }
