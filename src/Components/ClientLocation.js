import React, { useState } from "react";
import "./ClientLocation.css";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Maps from "./ClientLocation/Maps";
import List from "../Assets/List.json";

const ClientLocation = () => {
  const [longi, setlongi] = useState(76.908761);
  const [lati, setlati] = useState(28.412691);
  const [data, setdata] = useState("Select");
  const [dropmenu, setdropmenu] = useState(true);
  const shownlistHandler = () => {
    if (dropmenu) {
      setdropmenu(false);
    } else {
      setdropmenu(true);
    }
  };
  const LocationHandler = (e) => {
    const Id = e.target.id;
    setdata(List.locations[Id].name);
    setlati(List.locations[Id].location.latitude);
    setlongi(List.locations[Id].location.longitude);
  };
  console.log(lati, longi);
  // AIzaSyCwhKkFbOT8KqVFGpmaPQ1pBse-Rj94Tiw
  return (
    <>
      <div className="clientLocation">
        <div className="mainContainer">
          <div className="leftSection">
            <div className="leftsubSection">
              <div className="topArea">
                <FaSearch style={{ color: "wheat" }} />
                <p>Discover</p>
              </div>
              <div className="textContainer">
                <div className="doropdownMainContainer">
                  <p>Select you are to check</p>
                  <div className="dropdownMenu" onClick={shownlistHandler}>
                    <p>~</p>
                    <p>{data}</p>
                    <p>
                      <span style={{ display: dropmenu ? "none" : "block" }}>
                        <FaChevronUp />
                      </span>
                      <span style={{ display: dropmenu ? "block" : "none" }}>
                        <FaChevronDown />
                      </span>
                    </p>
                  </div>
                  <div
                    style={{
                      display: dropmenu ? "block" : "none",
                    }}
                  >
                    {List.locations.map((e, i) => {
                      return (
                        <>
                          <p
                            style={{
                              position: "relative",
                            }}
                            onClick={LocationHandler}
                            id={i}
                            className="locationList"
                          >
                            {e.name}
                          </p>
                        </>
                      );
                    })}
                  </div>
                </div>

                <div className="inputContainer">
                  <p>Latitude</p>
                  <input
                    type="text"
                    placeholder="Enter Latidute"
                    onChange={(e) => setlati(e.target.value)}
                  />
                  <p>Longitude</p>
                  <input
                    type="text"
                    placeholder="Enter Longitute"
                    onChange={(e) => setlongi(e.target.value)}
                  />
                </div>

                <div>
                  <p>Data Source</p>
                  <input type="checkbox" name="1" />
                  <label for="sentinal 1">Sentinal 1</label>
                  <br />
                  <input type="checkbox" name="1" />
                  <label for="sentinal 2">Sentinal 2</label>
                  <br />
                  <input type="checkbox" name="1" />
                  <label for="Landset">Landset</label>
                  <br />
                </div>
                <div className="timeRange">
                  <p>Time range [UTC]</p>
                  <div className="timeRangeline">
                    {Date().split(" ")[0] +
                      " " +
                      Date().split(" ")[1] +
                      " " +
                      Date().split(" ")[2] +
                      "-" +
                      Date().split(" ")[0] +
                      " " +
                      Date().split(" ")[1] +
                      " " +
                      Date().split(" ")[2]}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="midSection">
            <div className="midContainer">
              <Maps lat={lati} long={longi} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLocation;
