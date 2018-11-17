# try_graphql

[graphql](https://graphql.github.io)触ろかなっていうログ。

## 触る前に思ってたこと
APIどうする？って議論で昨今ぜったいGraphQL上がるよなーでも触ったことない。何がいいんだ？なんか型？とか指定できるんだっけ？SQLライクに書けるとか？ワイgRPC好きなんやがどういった優位性があるんや？技術選択が迫られたときにワイはなんて答えるんや？どうしてgraphQLが支持されているのかがよく分かっていない。普及しているからには明確なメリットがあるはずだ。使ってみればわかるはず。

## 触ったあとでわかったこと

## Tutorials

officialぽいのが3つあってどれからやればいいかわかんないから取り敢えず全部やるね

 1. [GraphQL Tutorials](https://www.graphql.com/tutorials/)
 2. [GraphQL Clients | GraphQL.js Tutorial](https://graphql.org/graphql-js/)
 3. [How to GraphQL - The Fullstack Tutorial for GraphQL](https://www.howtographql.com)

## client

```sh
$ echo json: `cat asset/hello.json`; \
echo response: `curl -s -X POST -H "Content-Type: application/json" -d @asset/hello.json http://localhost:4000/`
json: { "query": "{ hello }" }
response: {"data":{"hello":"Hello world!"}}

$ echo json: `cat asset/rolldice.json`; \
 echo response: `curl -s -X POST -H "Content-Type: application/json" -d @asset/rolldice.json http://localhost:4000/`
json: { "query": "{rollDice(numDice: 3, numSides: 6)}" }
response: {"data":{"rollDice":[4,4,4]}}

$ echo json: `cat asset/randomdie.json`; \
 echo response: `curl -s -X POST -H "Content-Type: application/json" -d @asset/randomdie.json http://localhost:4000/`

$ echo `cat asset/all.json`  ;  echo  `curl -s -X POST -H "Content-Type: application/json" -d @asset/all.json http://localhost:4000/` | python -mjson.tool
{ "query": "{ hello rollDice(numDice: 3, numSides: 6) getDie(numSides: 100) { rollOnce roll(numRolls: 3) } } " }
{
    "data": {
        "getDie": {
            "roll": [
                77,
                91,
                62
            ],
            "rollOnce": 35
        },
        "hello": "Hello world!",
        "rollDice": [
            5,
            3,
            1
        ]
    }
}
```