import {
  GET_ARTICLE_BY_SLUG,
  GET_ARTICLES_LIST,
  GET_ARTICLES_SLUGS,
  GET_AUDIOBOOKS_LIST,
  GET_GALLERY_BY_SLUG,
  GET_GALLERY_LIST,
  GET_GALLERY_SLUGS,
  GET_NEWS_BY_SLUG,
  GET_NEWS_LIST,
  GET_NEWS_SLUGS,
} from "./queries";

import ETBArticlesSection from "./components/ArticlesSection";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import NewsContent from "./components/NewsContent";
import ArticleTemplatePage from "./pages/ArticleTemplatePage";
import EmotionalTreasureBoxPage from "./pages/EmotionalTreasureBoxPage";
import GalleryTemplatePage from "./pages/GalleryTemplatePage";
import StoriesToHearPage from "./pages/StoriesToHearPage";
import StoriesToReadPage from "./pages/StoriesToReadPage";
import StoriesToViewPage from "./pages/StoriesToViewPage";
import getETBData from "./queries/getETBdata";

export {
  GET_ARTICLE_BY_SLUG,
  GET_ARTICLES_LIST,
  GET_ARTICLES_SLUGS,
  GET_AUDIOBOOKS_LIST,
  GET_GALLERY_BY_SLUG,
  GET_GALLERY_LIST,
  GET_GALLERY_SLUGS,
  GET_NEWS_BY_SLUG,
  GET_NEWS_LIST,
  GET_NEWS_SLUGS,
  ArticleTemplatePage,
  EmotionalTreasureBoxPage,
  ETBArticlesSection,
  FooterSection,
  GallerySection,
  GalleryTemplatePage,
  getETBData,
  Header,
  MainContent,
  NewsContent,
  StoriesToHearPage,
  StoriesToReadPage,
  StoriesToViewPage,
};
