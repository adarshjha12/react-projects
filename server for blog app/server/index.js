const express = require('express');
const config = require('./config/config');
require('./config/connection');
const port = config.server.port;
require('./controllers/signup');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const authRouter = require('./routers/authRoutes');
const uploadRouter = require('./routers/uploadRoutes')

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
};

app.options('*', cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());

// Debugging middleware
app.use((req, res, next) => {
    console.log('Cookies:', req.cookies);
    next();
});

app.use('/', authRouter);
app.use('/posts', uploadRouterauthRouter);

// app.get('/', (req, res) => {
//     res.send('welcome adarsh')
// });

app.listen(port, () => {
    console.log(`server is running on ${port}`);    
});
