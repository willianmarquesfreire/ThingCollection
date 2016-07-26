
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Thing -Datributos="description:String,currentLocation:Location:@ManyToOne"
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Location -Datributos="name:String,gps:GumgaGeoLocation"

mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Acessory -Datributos="description:String,amount:int" -Dsuper=Thing
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Book -Datributos="title:String,isbn:String,pages:int,publicationYear:int,editionNumber:int"
mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.transporte -Datributos="origin:Location,destination:Location" -Dsuper=Movement

mvn br.com.gumga:gumgag:entidade -Dentidade=br.com.gumga.thingcollection.domain.model.Emprestimo -Datributos="limit:GumgaDate,devolutionDate:Calendar"
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

