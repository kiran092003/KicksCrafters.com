import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app =express();

const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"Ecom",
    password:"shamlatha123",
    port:5432
});
db.connect();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("login.ejs",{
        notice:""
    });
})

app.get("/home",(req,res)=>{
    res.render("index.ejs");
})

app.get("/men",(req,res)=>{
    res.render("men.ejs");
})

app.get("/women",(req,res)=>{
    res.render("women.ejs");
})

app.get("/kids",(req,res)=>{
    res.render("kids.ejs");
})

app.get("/unisex",(req,res)=>{
    res.render("unisex.ejs");
})

app.get("/cart",async(req,res)=>{
    const cart=await db.query("select * FROM addcart"); 
    const i=cart.rows;
    var total=0;
    for(let s=0;s<i.length;s++){
           total=total+parseFloat(i[s].mr.substring(5));
    }
    const etot=total+5;
      res.render("cart.ejs",{
        item:cart.rows,
        tot:total,
        et:etot
      }) 
})

var btnval="";

app.post("/size", async(req,res)=>{
     btnval=req.body.si;
})

var na="";
var se="";
var mr="";
var im="";

app.post("/card1",(req,res)=>{
        na="White Sneaker";
        se="Men's Shoes";
        mr="MRP:$14.42";
        im="1.jpg";
    res.render("card.ejs",{
        name:"White Sneaker",
        sec: "Men's Shoes",
        mrp:"MRP:$14.42",
        image:"1.jpg",
        bv:""
    });
})
app.post("/add_cart",async(req,res)=>{
    var total=0;
    if(btnval==""){
        res.render("card.ejs",{
            bv:"Select size of sneakers",
            name:na,
            sec: se,
            mrp:mr,
            image:im
        })
    }
    else{
        await db.query("INSERT INTO addcart VALUES($1,$2,$3,$4,$5)",[na,se,mr,im,btnval]);
        const cart=await db.query("select * FROM addcart"); 
        const i=cart.rows;
        for(let s=0;s<i.length;s++){
               total=total+parseFloat(i[s].mr.substring(5));
        }
        const etot=total+5;
         res.render("cart.ejs",{
           item:cart.rows,
           tot:total,
           et:etot
         }) 
         btnval="";
    }     
});

app.post("/de",async(req,res)=>{
    const naa=req.body.xc;
    await db.query("DELETE FROM addcart where id=$1",[naa]);
    const cart=await db.query("select * FROM addcart"); 
    const i=cart.rows;
    var total=0;
    for(let s=0;s<i.length;s++){
           total=total+parseFloat(i[s].mr.substring(5));
    }
    const etot=total+5;
      res.render("cart.ejs",{
        item:cart.rows,
        tot:total,
        et:etot
      }) 
});

app.post("/card2",(req,res)=>{
    na="Blow Sneaker";
    se="Men's Shoes";
    mr="MRP:$10.13";
    im="8.jpg";
    res.render("card.ejs",{
        name:"Blow Sneaker",
        sec: "Men's Shoes",
        mrp:"MRP:$10.13",
        image:"8.jpg",
        bv:""
    });
})

app.post("/card3",(req,res)=>{
    na="Porsche Sneaker";
    se="Men's Shoes";
    mr="MRP:$8.42";
    im="3.jpg";
    res.render("card.ejs",{
        name:"Porsche Sneaker",
        sec: "Men's Shoes",
        mrp:"MRP:$8.42",
        image:"3.jpg",
        bv:""
    });
})

app.post("/card4",(req,res)=>{
    na="Air Hurache Sneaker";
    se="Men's Shoes";
    mr="MRP:$11.52";
    im="11.jpg";
    res.render("card.ejs",{
        name:"Air Hurache Sneaker",
        sec: "Men's Shoes",
        mrp:"MRP:$11.52",
        image:"11.jpg",
        bv:""
    });
})

app.post("/card5",(req,res)=>{
    na="Yezzy Style Sneaker";
    se="Men's Shoes";
    mr="MRP:$14.82";
    im="5.jpg";
    res.render("card.ejs",{
        name:"Yezzy Style Sneaker",
        sec: "Men's Shoes",
        mrp:"MRP:$14.82",
        image:"5.jpg",
        bv:""
    });
})
app.post("/card6",(req,res)=>{
    na="Ninja Style Sneaker";
    se="Men's Shoes";
    mr="MRP:$13.48";
    im="6.jpg";
    res.render("card.ejs",{
        name:"Ninja Style Sneaker",
        sec: "Men's Shoes",
        mrp:"MRP:$13.48",
        image:"6.jpg",
        bv:""
    });
})
app.post("/card7",(req,res)=>{
    na="Creative Sneaker";
    se="Men's Shoes";
    mr="MRP:$12.69";
    im="7.jpg";
    res.render("card.ejs",{
        name:"Creative Sneaker",
        sec: "Men's Shoes",
        mrp:"MRP:$12.69",
        image:"7.jpg",
        bv:""
    });
})

app.post("/card8",(req,res)=>{
    na="Black Sneaker";
    se="Men's Shoes";
    mr="MRP:$13.52";
    im="2.jpg";
    res.render("card.ejs",{
        name:"Black Sneaker",
        sec: "Men's Shoes",
        mrp:"MRP:$13.52",
        image:"2.jpg",
        bv:""
    });
})
app.post("/card9",(req,res)=>{
    na="Apuzzle Sneaker";
    se="Men's Shoes";
    mr="MRP:$12.79";
    im="9.jpg";
    res.render("card.ejs",{
        name:"Apuzzle Sneaker",
        sec: "Men's Shoes",
        mrp:"MRP:$12.79",
        image:"9.jpg",
        bv:""
    });
})
app.post("/card10",(req,res)=>{
    na="Tape Sneaker";
    se="Men's Shoes";
    mr="MRP:$13.12";
    im="m16.jpg";
    res.render("card.ejs",{
        name:"Tape Sneaker",
        sec: "Men's Shoes",
        mrp:"MRP:$13.12",
        image:"m16.jpg",
        bv:""
    });
})
app.post("/card11",(req,res)=>{
    na="Nike Men Court Vision";
    se="Men's Shoes";
    mr="MRP:$11.29";
    im="w2.jpg";
    res.render("card.ejs",{
        name:"Nike Men Court Vision",
        sec: "Men's Shoes",
        mrp:"MRP:$11.29",
        image:"w2.jpg",
        bv:""
    });
})
app.post("/card12",(req,res)=>{
    na="Nike Men Court Royale";
    se="Men's Shoes";
    mr="MRP:$9.50";
    im="m15.jpg";
    res.render("card.ejs",{
        name:"Nike Men Court Royale",
        sec: "Men's Shoes",
        mrp:"MRP:$9.50",
        image:"m15.jpg",
        bv:""
    });
})
app.post("/card13",(req,res)=>{
    na="Converse Sneaker";
    se="Men's Shoes";
    mr="MRP:$12.89";
    im="m13.jpg";
    res.render("card.ejs",{
        name:"Converse Sneaker",
        sec: "Men's Shoes",
        mrp:"MRP:$12.89",
        image:"m13.jpg",
        bv:""
    });
})
app.post("/card14",(req,res)=>{
    na="Air Jordan Sneaker";
    se="Men's Shoes";
    mr="MRP:$14.42";
    im="m14.jpg";
    res.render("card.ejs",{
        name:"Air Jordan Sneaker",
        sec: "Men's Shoes",
        mrp:"MRP:$14.42",
        image:"m14.jpg",
        bv:""
    });
})
app.post("/card15",(req,res)=>{
    na="Nike Dunk High";
    se="Men's Shoes";
    mr="MRP:$11.13";
    im="m19.jpg";
    res.render("card.ejs",{
        name:"Nike Dunk High",
        sec: "Men's Shoes",
        mrp:"MRP:$11.13",
        image:"m19.jpg",
        bv:""
    });
})
app.post("/card16",(req,res)=>{
    na="Nike Air Force 1";
    se="Men's Shoes";
    mr="MRP:$10.42";
    im="m18.jpg";
    res.render("card.ejs",{
        name:"Nike Air Force 1",
        sec: "Men's Shoes",
        mrp:"MRP:$10.42",
        image:"m18.jpg",
        bv:""
    });
})
app.post("/card17",(req,res)=>{
    na="Nike Zoom Fly";
    se="Men's Shoes";
    mr="MRP:$13.52";
    im="m17.jpg";
    res.render("card.ejs",{
        name:"Nike Zoom Fly",
        sec: "Men's Shoes",
        mrp:"MRP:$13.52",
        image:"m17.jpg",
        bv:""
    });
})
app.post("/card18",(req,res)=>{
    na="Pink Sneaker";
    se="Women's Shoes";
    mr="MRP:$12.42";
    im="w6.jpg";
    res.render("card.ejs",{
        name:"Pink Sneaker",
        sec: "Women's Shoes",
        mrp:"MRP:$12.42",
        image:"w6.jpg",
        bv:""
    });
})
app.post("/card19",(req,res)=>{
    na="Reebok Super Conect";
    se="Women's Shoes";
    mr="MRP:$11.13";
    im="w7.jpg";
    res.render("card.ejs",{
        name:"Reebok Super Conect",
        sec: "Women's Shoes",
        mrp:"MRP:$11.13",
        image:"w7.jpg",
        bv:""
    });
})
app.post("/card20",(req,res)=>{
    na="Baba bucci";
    se="Women's Shoes";
    mr="MRP:$9.42";
    im="w13.jpg";
    res.render("card.ejs",{
        name:"Baba bucci",
        sec: "Women's Shoes",
        mrp:"MRP:$9.42",
        image:"w13.jpg",
        bv:""
    });
})
app.post("/card21",(req,res)=>{
    na="Nike Women WMNS";
    se="Women's Shoes";
    mr="MRP:$11.52";
    im="w11.jpg";
    res.render("card.ejs",{
        name:"Nike Women WMNS",
        sec: "Women's Shoes",
        mrp:"MRP:$11.52",
        image:"w11.jpg",
        bv:""
    });
})
app.post("/card22",(req,res)=>{
    na="Puma Women Smashic";
    se="Women's Shoes";
    mr="MRP:$13.13";
    im="w14.jpg";
    res.render("card.ejs",{
        name:"Puma Women Smashic",
        sec: "Women's Shoes",
        mrp:"MRP:$13.13",
        image:"w14.jpg",
        bv:""
    });
})
app.post("/card23",(req,res)=>{
    na="Blow Sneaker";
    se="Women's Shoes";
    mr="MRP:$11.29";
    im="w8.jpg";
    res.render("card.ejs",{
        name:"Blow Sneaker",
        sec: "Women's Shoes",
        mrp:"MRP:$11.29",
        image:"w8.jpg",
        bv:""
    });
})
app.post("/card24",(req,res)=>{
    na="Skechers Sneakers";
    se="Women's Shoes";
    mr="MRP:$9.69";
    im="w9.jpg";
    res.render("card.ejs",{
        name:"Skechers Sneakers",
        sec: "Women's Shoes",
        mrp:"MRP:$9.69",
        image:"w9.jpg",
        bv:""
    });
})
app.post("/card25",(req,res)=>{
    na="Campus Women MATTY";
    se="Women's Shoes";
    mr="MRP:$11.52";
    im="w10.jpg";
    res.render("card.ejs",{
        name:"Campus Women MATTY",
        sec: "Women's Shoes",
        mrp:"MRP:$11.52",
        image:"w10.jpg",
        bv:""
    });
})
app.post("/card26",(req,res)=>{
    na="Chuck Taylor";
    se="Women's Shoes";
    mr="MRP:$13.42";
    im="w12.jpg";
    res.render("card.ejs",{
        name:"Chuck Taylor",
        sec: "Women's Shoes",
        mrp:"MRP:$13.42",
        image:"w12.jpg",
        bv:""
    });
})
app.post("/card27",(req,res)=>{
    na="Hightop Basketball";
    se="Women's Shoes";
    mr="MRP:$12.13";
    im="w15.jpg";
    res.render("card.ejs",{
        name:"Hightop Basketball",
        sec: "Women's Shoes",
        mrp:"MRP:$12.13",
        image:"w15.jpg"
        , bv:""
    });
})
app.post("/card28",(req,res)=>{
    na="Cross Trainers";
    se="Women's Shoes";
    mr="MRP:$10.42";
    im="w16.jpg";
    res.render("card.ejs",{
        name:"Cross Trainers",
        sec: "Women's Shoes",
        mrp:"MRP:$10.42",
        image:"w16.jpg",
        bv:""
    });
})
app.post("/card29",(req,res)=>{
    na="Cleats Sneaker";
    se="Women's Shoes";
    mr="MRP:$8.52";
    im="w17.jpg";
    res.render("card.ejs",{
        name:"Cleats Sneaker",
        sec: "Women's Shoes",
        mrp:"MRP:$8.52",
        image:"w17.jpg",
        bv:""
    });
})
app.post("/card31",(req,res)=>{
    na="Knee-Hi";
    se="Kids's Shoes";
    mr="MRP:$10.13";
    im="k1.jpg";
    res.render("card.ejs",{
        name:"Knee-Hi",
        sec: "Kid's Shoes",
        mrp:"MRP:$10.13",
        image:"k1.jpg",
        bv:""
    });
})
app.post("/card32",(req,res)=>{
    na="STRUT Sneaker";
    se="Kids's Shoes";
    mr="MRP:$11.23";
    im="k2.jpg";
    res.render("card.ejs",{
        name:"STRUT Sneaker",
        sec: "Kid's Shoes",
        mrp:"MRP:$11.23",
        image:"k2.jpg",
        bv:""
    });
})
app.post("/card33",(req,res)=>{
    na="Turn Heads";
    se="Kids's Shoes";
    mr="MRP:$12.62";
    im="k3.jpg";
    res.render("card.ejs",{
        name:"Turn Heads",
        sec: "Kid's Shoes",
        mrp:"MRP:$12.62",
        image:"k3.jpg",
        bv:""
    });
})
app.post("/card34",(req,res)=>{
    na="Catwalk Sneaker";
    se="Kids's Shoes";
    mr="MRP:$11.52";
    im="k4.jpg";
    res.render("card.ejs",{
        name:"Catwalk Sneaker",
        sec: "Kid's Shoes",
        mrp:"MRP:$11.52",
        image:"k4.jpg",
        bv:""
    });
})
app.post("/card35",(req,res)=>{
    na="Stiletto Sneaker";
    se="Kids's Shoes";
    mr="MRP:$8.42";
    im="k5.jpg";
    res.render("card.ejs",{
        name:"Stiletto Sneaker",
        sec: "Kid's Shoes",
        mrp:"MRP:$8.42",
        image:"k5.jpg",
        bv:""
    });
})
app.post("/card36",(req,res)=>{
    na="Solina Sneaker";
    se="Kids's Shoes";
    mr="MRP:$12.03";
    im="k6.jpg";
    res.render("card.ejs",{
        name:"Solina Sneaker",
        sec: "Kid's Shoes",
        mrp:"MRP:$12.03",
        image:"k6.jpg",
        bv:""
    });
})
app.post("/card37",(req,res)=>{
    na="Bset Kept Secret";
    se="Kids's Shoes";
    mr="MRP:$9.15";
    im="k7.jpg";
    res.render("card.ejs",{
        name:"Bset Kept Secret",
        sec: "Kid's Shoes",
        mrp:"MRP:$9.15",
        image:"k7.jpg",
        bv:""
    });
})
app.post("/card38",(req,res)=>{
    na="Trekist Sneaker";
    se="Kids's Shoes";
    mr="MRP:$13.02";
    im="k10.jpg";
    res.render("card.ejs",{
        name:"Trekist Sneaker",
        sec: "Kid's Shoes",
        mrp:"MRP:$13.02",
        image:"k10.jpg",
        bv:""
    });
})
app.post("/card39",(req,res)=>{
    na="Whitee Sneaker";
    se="Kids's Shoes";
    mr="MRP:$14.42";
    im="k9.jpg";
    res.render("card.ejs",{
        name:"Whitee Sneaker",
        sec: "Kid's Shoes",
        mrp:"MRP:$14.42",
        image:"k9.jpg",
        bv:""
    });
})
app.post("/card40",(req,res)=>{
    na="Nn Sneaker";
    se="Kids's Shoes";
    mr="MRP:$10.13";
    im="k8.jpg";
    res.render("card.ejs",{
        name:"Nn Sneaker",
        sec: "Kid's Shoes",
        mrp:"MRP:$10.13",
        image:"k8.jpg",
        bv:""
    });
})
app.post("/card41",(req,res)=>{
    na="Nike Kid Sneaker";
    se="Kids's Shoes";
    mr="MRP:$7.92";
    im="k11.jpg";
    res.render("card.ejs",{
        name:"Nike Kid Sneaker",
        sec: "Kid's Shoes",
        mrp:"MRP:$7.92",
        image:"k11.jpg",
        bv:""
    });
})
app.post("/card42",(req,res)=>{
    na="Air Hurache Sneakers";
    se="Kids's Shoes";
    mr="MRP:$11.52";
    im="k12.jpg";
    res.render("card.ejs",{
        name:"Air Hurache Sneakers",
        sec: "Kid's Shoes",
        mrp:"MRP:$11.52",
        image:"k12.jpg",
        bv:""
    });
})

app.post("/enter",async(req,res)=>{
    const search_input=req.body["sear"];
    var detalis=await db.query("select * from searchbox where namme=$1",[search_input]);
        na=detalis.rows[0].namme;
        se=detalis.rows[0].sec;
        mr=detalis.rows[0].mrp;
        im=detalis.rows[0].image;
    res.render("card.ejs",{
        name:na,
        sec: se,
        mrp:mr,
        image:im,
        bv:""
    });
})


app.post("/sunmit",async(req,res)=>{
    const email=req.body["email"];
    const pass=req.body["pass"];
    var passs=await db.query("select pass from signup where username=$1",[email]);
    if(passs.rowCount===0){
        res.render("login.ejs",{
                notice:"user not found"
        })
    }
    else{
        if(passs.rows[0].pass===pass){
            res.render("index.ejs");
        }
        else{
            res.render("login.ejs",{
                notice:"incorrect password"
            })
        }
    }
})

app.get("/signup",(req,res)=>{
    res.render("signup.ejs");
})

app.post("/submit",async(req,res)=>{
    const emailsign=req.body["email-sign"];
    const passsign=req.body["pass-sign"];
    await db.query("INSERT INTO signup VALUES($1,$2)",[emailsign,passsign]);
    res.render("login.ejs");
})

app.listen("3000",(req,res)=>{
    console.log("server listening at port 3000.")
})