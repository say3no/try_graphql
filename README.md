# try_graphql

なんかちょっと[graphql](https://graphql.github.io)触ろかなーと。

## 触る前に思ってたこと
APIどうする？って議論で昨今ぜったいGraphQL上がるよなーでも触ったことない。何がいいんだ？なんか型？とか指定できるんだっけ？SQLライクに書けるとか？ワイgRPC好きなんやがどういった優位性があるんや？技術選択が迫られたときにワイはなんて答えるんや？どうしてgraphQLが支持されているのかがよく分かっていない。普及しているからには明確なメリットがあるはずだ。使ってみればわかるはず。

## 触ったあとでわかったこと


## Tutorials
officialぽいのが3つあってどれからやればいいかわかんないから取り敢えず全部やるね
 1. [GraphQL Clients | GraphQL.js Tutorial](https://graphql.org/graphql-js/)
 2. [How to GraphQL - The Fullstack Tutorial for GraphQL](https://www.howtographql.com)
 3. [GraphQL Tutorials](https://www.graphql.com/tutorials/)

## client
 - それにつけても
```
curl -X POST -H "Content-Type: application/json" -d '{"query": "{ hello }"}' http://localhost:4000/graphql
```

 - `localhost:4000`からdevtoolで。
fetch('/graphql', {
    method: 'POST',
      headers: {
            'Content-Type': 'application/json',
                'Accept': 'application/json',
                  },
                    body: JSON.stringify({query: "{ hello }"})
})
  .then(r => r.json())
    .then(data => console.log('data returned:', data));
