const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const router = express.Router();
require("dotenv").config();

// import routes
const ticketRoutes = require("./routes/TicketManagement/Ticket-Admin"); //--Added by Vishara Prabuddhi--

const employeeRoutes = require("./routes/HRM/Employee"); //--Added by Isuru Pathum Herath--
const employeeSalaryRoute = require("./routes/HRM/Employee-Salary"); //--Added by Isuru Pathum Herath--
const employeeQuaratine = require("./routes/HRM/QuarantinedEmployee"); //--Added by Isuru Pathum Herath--
const task = require("./routes/HRM/Task"); //--Added by Isuru Pathum Herath--
const employeLogin = require("./routes/HRM/Employee-Login"); //--Added by Isuru Pathum Herath--
const attendance = require("./routes/HRM/StaffAttendance"); //--Added by Isuru Pathum Herath--
const salaryCalculation = require("./routes/HRM/salaryCalculation"); //--Added by Isuru Pathum Herath--

const stockRouter=require("./routes/InventoryManagement/stock");//--Added by Anupa Senevirathne--
const MedicineRouter=require("./routes/InventoryManagement/medecine");//--Added by Anupa Senevirathne--

const FoodsRoute = require("./routes/foodroute/foodsRoute");
const CommentRoute = require("./routes/foodroute/commentRoute");
const OrderRoute = require("./routes/foodroute/orderRoute");
const OrderDetailsRoute = require("./routes/foodroute/orderDetailsRoute");
const profileRoutes = require('./routes/UserManagement/uprofile');//--Added by Hirusha Rukmal--

var roomRoutes = require('./controllers/RoomControllers/roomController')//--add by roshini


import financePaymentRoutes from "./routes/FinanceRoutes/financePayment";
import financePayerRoutes from "./routes/FinanceRoutes/financePayer";
import FinanceInvoice from "./routes/FinanceRoutes/financeInvoice";
import FinanceInquary from "./routes/FinanceRoutes/financeInquary";
import FinacePayment from './routes/FinanceRoutes/finacepayment';

const PCRTestsRouter = require("./routes/MedicalTestsDetails/PCRTests.js");//--Added by Mathishi Adya Dissanayake--
const TempCheckupsRouter = require("./routes/MedicalTestsDetails/TempCheckups");//--Added by Mathishi Adya Dissanayake--
const PCRRepoRouter = require("./routes/MedicalTestsDetails/PCRReport1");//--Added by Mathishi Adya Dissanayake--

// App
const app = express();

// Database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// Express Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Route Middleware
app.use(ticketRoutes); //--Added by Vishara Prabuddhi--

app.use("/employee", employeeRoutes); //--Added by Isuru Pathum Herath--
app.use("/salary", employeeSalaryRoute); //--Added by Isuru Pathum Herath--
app.use("/cal-salary", salaryCalculation); //--Added by Isuru Pathum Herath--
app.use("/qEmployee", employeeQuaratine); //--Added by Isuru Pathum Herath--
app.use("/task", task); //--Added by Isuru Pathum Herath--
app.use("/staffLogin", employeLogin); //--Added by Isuru Pathum Herath--
app.use("/attendance", attendance); //--Added by Isuru Pathum Herath--

app.use("/foods", FoodsRoute);
app.use("/comment", CommentRoute);
app.use("/order", OrderRoute);
app.use("/orderdetails", OrderDetailsRoute);
app.use(profileRoutes);//--Added by Hirusha Rukmal--

app.use("/stock",stockRouter);//--Added by Anupa Senevirathne--
app.use("/meds",MedicineRouter);//--Added by Anupa Senevirathne--

app.use("/payment", financePaymentRoutes);  
app.use("/payer", financePayerRoutes);  
app.use("/invoice", FinanceInvoice);   
app.use("/inquary", FinanceInquary);

app.use("/PCRTest",PCRTestsRouter);//--Added by Mathishi Adya Dissanayake--
app.use("/TempCheckup",TempCheckupsRouter);//--Added by Mathishi Adya Dissanayake--
app.use("/payment", FinacePayment);

app.use('/room',roomRoutes)
 
// Post
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
