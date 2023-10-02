import React from "react";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "../../index.css";
import Topbar from "../global/Topbar";
import StudentSidebar from "../global/StudentSidebar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { tokens } from "../../theme";
import { Button, CardActions, Box } from "@mui/material";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Stack from '@mui/material/Stack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { red } from '@mui/material/colors';

const StudentReviewForm = () => {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const danger = red[500]

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <StudentSidebar />
          <main className="content">
            <Topbar />
            <div>
            <Stack direction="row">

              <Card 
                sx={{
                  minWidth: 920,
                  mx: 10,
                  backgroundColor: colors.primary[400],
                  marginBottom: 5,
                }}
              >
                <CardContent style={{display: "inline-block"}}>
                  <Box>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 24}}>
                    Download Review Form
                  </Typography>
                  </Box>
                  <CardActions>
                    <Box>
                    <Button
                      size="small"
                      sx={{
                        color: colors.blueAccent[400],
                        border: 1,
                        marginRight: 5,
                      }}
                    >
                      <DownloadOutlinedIcon></DownloadOutlinedIcon>
                      Download
                    </Button>
                    </Box>
                  </CardActions>
                  
                </CardContent>
              </Card>
              </Stack>
              <Stack direction="row">
              <Card
                sx={{
                  minWidth: 380,
                  mx: 10,
                  backgroundColor: colors.primary[400],
                  marginBottom: 5
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 24}}>
                    0th Review
                  </Typography>
                  
                  <CardActions>
                    <Box>
                    
                    <Button
                      size="small"
                      sx={{
                        color: colors.greenAccent[400],
                        border: 1,
                      }}
                    >
                      <FileUploadOutlinedIcon></FileUploadOutlinedIcon>
                      Upload
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: colors.blueAccent[400],
                        border: 1,
                        mx: 2
                      }}
                    >
                      <FileUploadOutlinedIcon></FileUploadOutlinedIcon>
                      Update
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: danger,
                        border: 1,
                      }}
                    >
                      <DeleteOutlineIcon></DeleteOutlineIcon>
                      Delete
                    </Button>
                    </Box>
                  </CardActions>
                </CardContent>
              </Card>

              <Card
                sx={{
                  minWidth: 380,
                  mx: 10,
                  backgroundColor: colors.primary[400],
                  marginBottom: 5
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 24}}>
                    1st Review
                  </Typography>
                  
                  <CardActions>
                  <Box>
                    
                    <Button
                      size="small"
                      sx={{
                        color: colors.greenAccent[400],
                        border: 1,
                      }}
                    >
                      <FileUploadOutlinedIcon></FileUploadOutlinedIcon>
                      Upload
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: colors.blueAccent[400],
                        border: 1,
                        mx: 2
                      }}
                    >
                      <FileUploadOutlinedIcon></FileUploadOutlinedIcon>
                      Update
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: danger,
                        border: 1,
                      }}
                    >
                      <DeleteOutlineIcon></DeleteOutlineIcon>
                      Delete
                    </Button>
                    </Box>
                  </CardActions>
                </CardContent>
              </Card>
              </Stack>
              <Stack direction="row">
              <Card
                sx={{
                  minWidth: 380,
                  mx: 10,
                  backgroundColor: colors.primary[400],
                  marginBottom: 5
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 24}}>
                    2nd Review
                  </Typography>
                  
                  <CardActions>
                  <Box>
                    
                    <Button
                      size="small"
                      sx={{
                        color: colors.greenAccent[400],
                        border: 1,
                      }}
                    >
                      <FileUploadOutlinedIcon></FileUploadOutlinedIcon>
                      Upload
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: colors.blueAccent[400],
                        border: 1,
                        mx: 2
                      }}
                    >
                      <FileUploadOutlinedIcon></FileUploadOutlinedIcon>
                      Update
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: danger,
                        border: 1,
                      }}
                    >
                      <DeleteOutlineIcon></DeleteOutlineIcon>
                      Delete
                    </Button>
                    </Box>
                  </CardActions>
                </CardContent>
              </Card>

              <Card
                sx={{
                  minWidth: 380,
                  mx: 10,
                  backgroundColor: colors.primary[400],
                  marginBottom: 5
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 24}}>
                    3rd Review
                  </Typography>
                  
                  <CardActions>
                  <Box>
                    
                    <Button
                      size="small"
                      sx={{
                        color: colors.greenAccent[400],
                        border: 1,
                      }}
                    >
                      <FileUploadOutlinedIcon></FileUploadOutlinedIcon>
                      Upload
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: colors.blueAccent[400],
                        border: 1,
                        mx: 2
                      }}
                    >
                      <FileUploadOutlinedIcon></FileUploadOutlinedIcon>
                      Update
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: danger,
                        border: 1,
                      }}
                    >
                      <DeleteOutlineIcon></DeleteOutlineIcon>
                      Delete
                    </Button>
                    </Box>
                  </CardActions>
                </CardContent>
              </Card>
              </Stack>
              <Stack direction="row">
              <Card
                sx={{
                  minWidth: 380,
                  mx: 10,
                  backgroundColor: colors.primary[400],
                  marginBottom: 5
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 24}}>
                    Model Review
                  </Typography>
                  
                  <CardActions>
                  <Box>
                    
                    <Button
                      size="small"
                      sx={{
                        color: colors.greenAccent[400],
                        border: 1,
                      }}
                    >
                      <FileUploadOutlinedIcon></FileUploadOutlinedIcon>
                      Upload
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: colors.blueAccent[400],
                        border: 1,
                        mx: 2
                      }}
                    >
                      <FileUploadOutlinedIcon></FileUploadOutlinedIcon>
                      Update
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: danger,
                        border: 1,
                      }}
                    >
                      <DeleteOutlineIcon></DeleteOutlineIcon>
                      Delete
                    </Button>
                    </Box>
                  </CardActions>
                </CardContent>
              </Card>

              <Card
                sx={{
                  minWidth: 380,
                  mx: 10,
                  backgroundColor: colors.primary[400],
                  marginBottom: 5
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontSize: 24}}>
                    Final Review
                  </Typography>
                  
                  <CardActions>
                  <Box>
                    
                    <Button
                      size="small"
                      sx={{
                        color: colors.greenAccent[400],
                        border: 1,
                      }}
                    >
                      <FileUploadOutlinedIcon></FileUploadOutlinedIcon>
                      Upload
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: colors.blueAccent[400],
                        border: 1,
                        mx: 2
                      }}
                    >
                      <FileUploadOutlinedIcon></FileUploadOutlinedIcon>
                      Update
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        color: danger,
                        border: 1,
                      }}
                    >
                      <DeleteOutlineIcon></DeleteOutlineIcon>
                      Delete
                    </Button>
                    </Box>
                  </CardActions>
                </CardContent>
              </Card>
              </Stack>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default StudentReviewForm;
