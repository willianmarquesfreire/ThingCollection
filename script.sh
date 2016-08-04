mvn archetype:generate -DarchetypeVersion=1.2.10-SNAPSHOT -DinteractiveMode=false -DarchetypeGroupId=br.com.gumga  -DarchetypeArtifactId=projeto-archetype  -DgroupId=br.com.gumga.thingcollection  -DartifactId=ThingCollection -Dversion=0.0.1

cd ThingCollection-domain

mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Thing -Datributos="description:String,currentLocation:Location:@ManyToOne"
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Location -Datributos="name:String,gps:GumgaGeoLocation"
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Acessory -Datributos="description:String,amount:int" -Dsuper=Thing
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Book -Datributos="title:String,isbn:String,pages:int,publicationYear:int,editionNumber:int"
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.People -Datributos="name:String,dateBirth:GumgaDate,email:String, website:String"
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Reservation -Datributos="expirationDate:GumgaDate" -Dsuper=Movement
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Contact -Datributos="description:String,phone:String"
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Address -Datributos="description:String,address:GumgaAddress"
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Movement -Datributos="outputDate:Date"
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Author -Datributos="subjects:List<Subject>" -Dsuper=People
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Subject -Datributos="description:String"
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Book -Datributos="title:String,isbn:String,pages:int,publicationYear:Date,editionNumber:String"
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.PublishingHouse -Datributos="name:String,email:String,website:String"
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Transport -Datributos="origin:Location,destination:Location" -Dsuper=Movement

cd ThingCollection-application

mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.Thing
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.Location
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.Acessory
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.Book
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.Reservation
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.People
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.Contact
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.Address
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.Movement
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.Author
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.Subject
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.Book
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.PublishingHouse
mvn br.com.gumga:gumgag:aplicacao -Dentidade=br.com.gumga.thingcollection.domain.model.Transport

cd ThingCollection-api

mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.Thing
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.Location
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.Acessory
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.Book
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.Reservation
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.People
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.Contact
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.Address
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.Movement
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.Author
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.Book
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.PublishingHouse
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.Transport
mvn br.com.gumga:gumgag:api -Dentidade=br.com.gumga.thingcollection.domain.model.Subject

cd ThingCollection-presentation

mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.Thing -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.Location -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.Acessory -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.Book -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.Reservation -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.People -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.Contact -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.Address -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.Movement -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.Author -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.Book -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.PublishingHouse -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.Transport -Doverride=true
mvn br.com.gumga:gumgag:apresentacao -Dentidade=br.com.gumga.thingcollection.domain.model.Subject -Doverride=true

mvn clean install


























