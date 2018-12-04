// idは必須項目だが、contentとauthorはなくてもいい
class Message {
    constructor(id, {
        content = 'Empty',
        author = 'Toshiaki'
    }) {
        this.id = id
        this.content = content
        this.author = author
    }
}

export default Message