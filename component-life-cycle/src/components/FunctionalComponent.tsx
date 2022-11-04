import React, { useEffect, useState } from "react";
import Input from "@mui/material/Input";
import {
  Select,
  MenuItem,
  TextField,
  Grid,
  Box,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";

export default function FunctionalComponent() {
  const [name, setName] = useState<String>("");
  const [age, setAge] = useState<Number>();
  const [gender, setGender] = useState<String>("");
  const [ageText, setAgeText] = useState<String>("");
  const [imageLink, setImageLink] = useState<String>("");
  const [iconLink, setIconLink] = useState<String>("");

  useEffect(() => {
    if (age) {
      if (age < 26) {
        setAgeText("Below 26");
        setImageLink(
          "https://www.professorshouse.com/wp-content/uploads/2015/03/children-240.jpg"
        );
      } else if (age < 51) {
        setAgeText("Above 25 and Below 51");
        setImageLink(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaAllnLyUG7Zc82Oiiy4O9IGQFJeW4R544kiUPfMQSPwFLDuWmWGy0NXapQ_xwLD-WCwA&usqp=CAU"
        );
      } else {
        setAgeText("Above 50");
        setImageLink(
          "https://media.istockphoto.com/photos/togetherness-picture-id490349156?k=20&m=490349156&s=612x612&w=0&h=0BqqfNzlWCpBRPLub-xHy5qOl6X54bGnEPXaktbeoKA="
        );
      }
    }
    if(gender){
      if(gender === "f") setIconLink("https://cdn-icons-png.flaticon.com/512/201/201634.png");
      else setIconLink("https://imperialhospitals.in/wp-content/uploads/2021/06/236831.png");
    }
  }, [age, gender]);

  return (
    <Grid container direction={"row"} md={6}>
      <Grid item display={"flex"} direction={"column"} md={4}>
        <FormControl sx={{ m: 1, width: "95%" }}>
          <TextField
            required
            label="Name"
            id="outlined-requird"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        {name && (
          <div>
            <FormControl sx={{ m: 1, width: "95%" }}>
              <TextField
                label="Age"
                required
                type={"number"}
                id="outlined-requird"
                defaultValue={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "95%" }}>
              <InputLabel id="demo-simple-select-helper-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={gender}
                label="Gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value={"f"}>Female</MenuItem>
                <MenuItem value={"m"}>Male</MenuItem>
              </Select>
            </FormControl>
          </div>
        )}
      </Grid>
      <Grid item md={6}>
        {age && (
          <div>
            <Typography color={"primary"}>{ageText}</Typography>
            <img src={`${imageLink}`} style={{height: "180px"}} alt={"ageImage"} />
          </div>
        )}
      </Grid>
      <Grid item md={2} display="flex" justifyContent={"center"} alignItems="center">
        {gender && (
          <div>
            <img src={`${iconLink}`} style={{height: "150px"}} alt={"genderIcon"} />
          </div>
        )}
      </Grid>
    </Grid>
  );
}
