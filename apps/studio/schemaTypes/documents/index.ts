import { blog } from "./blog";
import { homePage } from "./home-page";
import { page } from "./page";
import { blogIndex } from "./blog-index";
import { faq } from "./faq";
import { author } from "./author";

export const singletons = [homePage, blogIndex];

export const documents = [blog, page, faq, author, ...singletons];
