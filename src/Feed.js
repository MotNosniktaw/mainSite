import { DateTime } from "luxon";
import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { DotLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";
import GridLoader from "react-spinners/GridLoader";
import PuffLoader from "react-spinners/PuffLoader";
import constants from "./constants";
import useGetRSSFeed from "./getRSSFeed";
import Widget from "./Widget";

export function Feed() {
  const { feed, isLoading, isError, error } = useGetRSSFeed();

  const renderContent = () => {
    if (isLoading) {
      return (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DotLoader color={constants.palette.medium3} />
        </div>
      );
    }

    if (isError) {
      return (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ height: 150, width: 150 }}>
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="SentimentVeryDissatisfiedIcon"
              fill={constants.palette.medium3}
            >
              <circle cx="15.5" cy="9.5" r="1.5"></circle>
              <circle cx="8.5" cy="9.5" r="1.5"></circle>
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"></path>
            </svg>
          </div>
          <h4 style={{ textAlign: "center" }}>
            There was an error retrieving RSS Feed
          </h4>
        </div>
      );
    }

    return (
      <Scrollbars>
        {feed?.map((item) => (
          <Widget color="grey" height={1}>
            <div
              style={{
                padding: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                cursor: "pointer",
              }}
              onClick={() => window.open(item.link, "__blank")}
            >
              <span style={{ fontSize: 16, fontWeight: 600 }}>
                {item.title}
                <br />
                <span style={{ fontSize: 12, color: "gray" }}>
                  {item.feedTitle} -{" "}
                  {DateTime.fromISO(item.date).toFormat("MMM dd yyyy, HH:mm")}
                </span>
              </span>
            </div>
          </Widget>
        ))}
      </Scrollbars>
    );
  };
  return (
    <div style={{ padding: 8, width: 400, zIndex: 1 }}>
      <Widget height={9.65} width={1} color="blue">
        <div style={{ padding: 12, height: "100%", width: "100%" }}>
          {renderContent()}
        </div>
      </Widget>
    </div>
  );
}
