const monodb = require('mongodb').MongoClient ;

const DATABASE = 'mongodb+srv://ostadUser:ostadPass@cluster0.dejoiup.mongodb.net'


monodb.connect(DATABASE,(error,MyMongodbClient)=>{
    if(error){
        console.log('Mongodb Connection Fail');
    }else{
        console.log('Mongodb Connection successfully');
        // InsertData(MyMongodbClient)   //insert data
        // FindAllData(MyMongodbClient)    //find all data 
        // FindDataLS(MyMongodbClient)    //find data with limit & sort 
        // FindOneDataWithoutCondition(MyMongodbClient)     //find one data without condition
        // FindOneDataWithCondition(MyMongodbClient)    //find one data with condition
        // FindDataByProjection(MyMongodbClient)     //find data by Projection
        // FindDataByQurey(MyMongodbClient)     //find one data by Qurey
        // UpdateData(MyMongodbClient)     //update one item
        // DeleteOneData(MyMongodbClient)     // delete one item
        // DeleteManyData(MyMongodbClient)     // delete many item

    }
})

// ISERT DATA
function InsertData(MyMongodbClient){
    var Database = MyMongodbClient.db('ThirtAssignmentSariot');
    var MyCollection = Database.collection('DataCollection');
    var MyData ={name:"Fahad Hossain", department:"Computer Technology",roll:"490225",semester:"six",shift:"first"};
    MyCollection.insertOne(MyData,(error)=>{
        if(error){
            console.log('Data insert fail');
        }else{
            console.log('Data insert success');
        }
    })
}
// FIND ALL DATA 
function FindAllData(MyMongodbClient){
    var Database = MyMongodbClient.db('ThirtAssignmentSariot');
    var MyCollection = Database.collection('DataCollection');
    MyCollection.find().toArray((error,GetAllData)=>{
        if(error){
            console.log('Find All Data fail');
        }else{
            console.log(GetAllData);
        }
    })
}

// FIND DATA LIMIT & sort
function FindDataLS(MyMongodbClient){
    var Database = MyMongodbClient.db('ThirtAssignmentSariot');
    var MyCollection = Database.collection('DataCollection');
    var SortItem ={roll:-1}  // {roll:1--> small to big/roll:-1--> big to small}
    MyCollection.find().limit(5).sort(SortItem).toArray((error,AllData)=>{
        if(error){
            console.log('Find limit & sort data fail');
        }else{
            console.log(AllData);
        }
    })
}

// FIND ONDE DATA WITHOUT CONDITION
function FindOneDataWithoutCondition(MyMongodbClient){
    var Database = MyMongodbClient.db('ThirtAssignmentSariot');
    var MyCollection = Database.collection('DataCollection');
    var Qurey = {};
    MyCollection.findOne(Qurey,(error,AllData)=>{
        if(error){
            console.log('Find Onde Data with out condition fail');
        }else{
            console.log(AllData);
        }
    })
}

// FIND ONDE DATA WITHCONDITION
function FindOneDataWithCondition(MyMongodbClient){
    var Database = MyMongodbClient.db('ThirtAssignmentSariot');
    var MyCollection = Database.collection('DataCollection');
    var FindData = {shift:"second"}
    MyCollection.findOne(FindData,(error,AllData)=>{
        if(error){
            console.log('Find One Data with condition fail');
        }else{
            console.log(AllData);
        }
    })
}

// FIND DATA  BY PROJECTION 
function FindDataByProjection(MyMongodbClient){
    var Database = MyMongodbClient.db('ThirtAssignmentSariot');
    var MyCollection = Database.collection('DataCollection');
    var DataObj = {}
    var DataByProjection ={projection:{roll:1,name:1}} //{roll:1-->get all roll number}
    MyCollection.find(DataObj,DataByProjection ).toArray((error,AllData)=>{
        if(error){
            console.log('Find All Data By Projection fail');
        }else{
            console.log(AllData);
        }
    })
}

// FIND DATA  BY Qurey
function FindDataByQurey(MyMongodbClient){
    var Database = MyMongodbClient.db('ThirtAssignmentSariot');
    var MyCollection = Database.collection('DataCollection');
    var Qurey = {department:"Computer Technology",shift:"first"}  // Qurey means Search
    MyCollection.find(Qurey).toArray((error,AllData)=>{
        if(error){
            console.log('Find all Data By Qurey fail');
        }else{
            console.log(AllData);
        }
    })
}

// UPDATAE ONE DATA 
function UpdateData(MyMongodbClient){
    var Database = MyMongodbClient.db('ThirtAssignmentSariot');
    var MyCollection = Database.collection('DataCollection');
    var OldData = {roll:"490225"}
    var NewData = {$set:{name:"sariot Hossain",department:"Computer Technology",shift:"First"}}
    MyCollection.updateOne(OldData,NewData,(error,Data)=>{
        if(error){
            console.log('Update Data fail');
        }else{
            console.log(Data);
        }
    })
}

// DELETE ONE DATA 
function DeleteOneData(MyMongodbClient){
    var Database = MyMongodbClient.db('ThirtAssignmentSariot');
    var MyCollection = Database.collection('DataCollection');
    var DeleteItem = {roll:"490225"}
    MyCollection.deleteOne(DeleteItem,(error,Data)=>{
        if(error){
            console.log('Delete One Data fail');
        }else{
            console.log(Data);
        }
    })
}

// DELETE MANY DATA 
function DeleteManyData(MyMongodbClient){
    var Database = MyMongodbClient.db('ThirtAssignmentSariot');
    var MyCollection = Database.collection('DataCollection');
    MyCollection.deleteMany((error,Data)=>{
        if(error){
            console.log('Delete all Data fail');
        }else{
            console.log(Data);
        }
    })
}


// END