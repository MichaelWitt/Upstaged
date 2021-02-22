import React, { Component } from "react";
import MaterialTable from "material-table";
import API from "../../utils/API";
import "./style.css";

class News extends Component {
  state = {
    filteredNews: [],
  };

  news = [];

  componentDidMount() {
    API.getNews().then((response) => {
      // console.log("response:", response.data.value);
      this.news = response.data.value;
      this.setState({
        filteredNews: this.news,
      });
    });
  }

  render() {
    return (
      <div className="formatting" style={{ maxWidth: "100%" }}>
        <MaterialTable
          localization={{
            body: {
              emptyDataSourceMessage: (
                <h1
                  style={{
                    textAlign: "center",
                    position: "absolute",
                    top: "10%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Generating Results...
                </h1>
              ),
            },
          }}
          columns={[
            {
              title: "Articles",
              field: "image",
              headerStyle: { maxWidth: 600 },
              cellStyle: {
                maxWidth: 600,
                margin: "30px",
              },
              render: (rowData) => (
                <a
                  href={rowData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={rowData.image}
                    alt={rowData.image}
                    style={{ width: 350, height: 200 }}
                  />
                </a>
              ),
            },
            {
              title: "Content",
              field: "content",
              headerStyle: { maxWidth: 150 },
              cellStyle: { maxWidth: 150 },
            },
            {
              title: "Headline",
              field: "headline",
              headerStyle: { maxWidth: 100 },
              cellStyle: { maxWidth: 100 },
            },
            {
              title: "Source",
              field: "source",
              headerStyle: { maxWidth: 100 },
              cellStyle: { maxWidth: 100 },
            },
            {
              title: "Date",
              field: "date",
              defaultSort: "desc",
            },
          ]}
          data={this.state.filteredNews.map((news) => {
            let tableData = {
              image: `${news.image.url}`,
              website: `${news.url}`,
              headline: `${news.description.substring(0, 200) + "..."}`,
              content: `${
                news.body.charAt(0).toUpperCase() +
                news.body.slice(1).substring(0, 200) +
                "... [Read More]"
              }`,
              source: `${
                news.provider.name.charAt(0).toUpperCase() +
                news.provider.name.slice(1).substring(0, 20)
              }`,
              date: `${news.datePublished.split(/[T ]/i, 1)[0]}`,
            };
            return tableData;
          })}
          options={{
            paging: true,
            pageSize: 20,
            emptyRowsWhenPaging: true,
            pageSizeOptions: [6, 12, 20, 50],
            headerStyle: {
              backgroundColor: "#F7E200",
              color: "#000000",
            },
          }}
          title="News"
        />
      </div>
    );
  }
}

export default News;
