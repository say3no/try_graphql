import frisby from 'frisby'
import Joi from 'joi'

// こいつはfrisbyを使ったAPIテストになる
test('first test ', () => {
    expect(true).toBe(true)
})

/** firsbyのREADME.mdからぶちぬいたチュートリアル的な。 */
test('frisby test', () => {
    return frisby.get('http://httpbin.org/status/418')
        .expect('status', 418)
})

describe('Joi tasting', () => {
    const schema = Joi.object().keys({
        username: Joi.string().alphanum().min(3).max(30).required()
    })
    test('hogehoge', () => {
        Joi.validate({
            username: 'fff'
        }, schema) // pass
    })
})

describe('Posts', () => {
    test('should return all posts and first post should have comments', () => {
        return frisby.get('http://jsonplaceholder.typicode.com/posts')
            .expect('status', 200)
            .expect('jsonTypes', '*', {
                userId: Joi.number(),
                id: Joi.number(),
                title: Joi.string(),
                body: Joi.string()
            })
            .then(function(res) { // res = FrisbyResponse object
                let postId = res.json[0].id

                // Get first post's comments
                // RETURN the FrisbySpec object so function waits on it to finish - just like a Promise chain
                return frisby.get('http://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
                    .expect('status', 200)
                    .expect('json', '*', {
                        postId: postId
                    })
                    .expect('jsonTypes', '*', {
                        postId: Joi.number(),
                        id: Joi.number(),
                        name: Joi.string(),
                        email: Joi.string().email(),
                        body: Joi.string()
                    })
            })
    })
})