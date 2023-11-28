db.Restaurant.find()
db.Restaurant.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.Restaurant.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0})
db.Restaurant.find({},{restaurant_id: 1, name: 1, borough: 1, 'address.zipcode': 1, _id: 0})
db.Restaurant.find({borough: 'Bronx'})
db.Restaurant.find({borough: 'Bronx'}).limit(5)
db.Restaurant.find({borough: 'Bronx'}).limit(5).skip(5)
db.Restaurant.find({"grades.score":{$gt:90}})
db.Restaurant.find({"grades.score":{$gt:80,$lt:100}})
db.Restaurant.find({'address.coord.1': { $lt: -95.754168 }})
db.Restaurant.find({$and:[ {cuisine: {$ne: "American"}}, {"grades.score": {$gt: 70}}, {"address.coord.0": {$lt: -65.754168 }}]})
db.Restaurant.find({"cuisine":{$ne:"American"},"grades.score":{$gt:70},'address.coord.0':{$lt:-65.754168}})
db.Restaurant.find({cuisine: {$ne:'American '}, 'grades.grade': 'A', borough: {$ne: 'Brooklyn'}}).sort({cuisine: -1})
db.Restaurant.find({name: /^Wil/},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.Restaurant.find({name: /ces$/},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.Restaurant.find({name: /Reg/},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.Restaurant.find({borough: 'Bronx', cuisine: {$in: ['American ', 'Chinese']}})
db.Restaurant.find({borough: {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']} },{restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.Restaurant.find({borough: {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']} },{restaurant_id: 1, name: 1, borough: 1, cuisine: 1}) 
db.Restaurant.find({'grades.score': {$lte: 10} },{restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.Restaurant.find({$or: [{cuisine: {$nin: ['American ', 'Chinese']}}, {name: /^Wil/}] },{restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.Restaurant.find({grades: { $elemMatch: {score: 11, grade: 'A', date: ISODate('2014-08-11T00:00:00Z')}}},{restaurant_id: 1, name: 1, grades: 1})
db.Restaurant.find({'grades.1.score': 9, 'grades.1.grade': 'A', 'grades.1.date': ISODate('2014-08-11T00:00:00Z')},{restaurant_id: 1, name: 1, grades: 1})
db.Restaurant.find({'address.coord.1': {$gt: 42, $lt: 52}}, {restaurant_id: 1, name: 1, address: 1})
db.Restaurant.find().sort({name: 1})
db.Restaurant.find().sort({name: -1})
db.Restaurant.find().sort({cuisine: 1, borough: -1})
db.Restaurant.find({"address.street": {$exists: false}}, {address: 1})
db.Restaurant.find({'address.coord': {$type : 1}})
db.Restaurant.find({'grades.score': {$mod: [ 7, 0 ]}}, {restaurant_id: 1, name: 1, grades: 1})
db.Restaurant.find({name: /mon/},{name: 1, borough: 1, 'address.coord': 1, cuisine: 1})
db.Restaurant.find({name: /^Mad/},{name: 1, borough: 1, 'address.coord': 1, cuisine: 1})

