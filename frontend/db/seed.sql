DROP DATABASE IF EXISTS movie_app;
CREATE DATABASE movie_app;

\c movie_app;

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    genre_id INT NOT NULL,
    img_url VARCHAR NOT NULL
);

CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    stars INT NOT NULL,
    movie_id INT REFERENCES movies(id) 
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    body TEXT NOT NULL,
    movie_id INT REFERENCES movies(id)
);

INSERT INTO genres(name) VALUES ('action'),('comedy'), ('drama'), ('horror'), ('documentary');

INSERT INTO movies(title, genre_id, img_url) VALUES ('Sacred Time', 4, 'https://picsum.photos/300/500/?random'), 
                                                    ('The Rough Boy', 2,  'https://picsum.photos/300/500/?random'),
                                                    ('Gift of Gift', 2,  'https://picsum.photos/300/500/?random'),
                                                    ('The Night Guardian', 5, 'https://picsum.photos/300/500/?random'),
                                                    ('The Prince of the Moon', 4,  'https://picsum.photos/300/500/?random'),
                                                    ('Word in the Man', 1, 'https://picsum.photos/300/500/?random'),
                                                    ('Which Eye', 2, 'https://picsum.photos/300/500/?random'),
                                                    ('The Forgotten Sword', 4, 'https://picsum.photos/300/500/?random'),
                                                    ('Dragon of Birth', 3,  'https://picsum.photos/300/500/?random'),
                                                    ('The Memory Flight', 1,  'https://picsum.photos/300/500/?random');

INSERT INTO ratings (stars, movie_id) VALUES (3, 1),
                                             (5, 1),
                                             (2, 2),
                                             (4, 2),
                                             (1, 3),
                                             (3, 3),
                                             (1, 4),
                                             (2, 4),
                                             (3, 5),
                                             (2, 5),
                                             (2, 6),
                                             (3, 6),
                                             (1, 7),
                                             (4, 7),
                                             (2, 8),
                                             (5, 8),
                                             (5, 9),
                                             (5, 9),
                                             (3, 10),
                                             (3, 10);

INSERT INTO comments (body, movie_id) VALUES ('Muffin candy sugar plum cheesecake ice cream gingerbread topping sugar plum marzipan. Sweet biscuit cupcake. Gummi bears jujubes tiramisu cupcake biscuit croissant candy canes. Ice cream gummi bears donut.', 1),
                                             ('Chocolate bar lollipop bonbon brownie. Tiramisu apple pie caramels lemon drops macaroon. Donut chupa chups marzipan oat cake candy canes sweet oat cake dragée. Icing chocolate tiramisu pie.', 2),
                                             ('Ice cream sweet roll tootsie roll topping sesame snaps. Toffee tart toffee chupa chups. Chocolate marzipan carrot cake cookie jujubes. Jujubes powder sweet roll sweet roll topping.', 3),
                                             ('Apple pie bear claw sesame snaps cake jelly beans caramels powder sesame snaps. Sweet roll apple pie caramels cheesecake jujubes fruitcake toffee marshmallow soufflé. Gummi bears dessert pie gummi bears. Bear claw soufflé chocolate tootsie roll macaroon sesame snaps pie tootsie roll.', 4),
                                             ('Cheesecake lollipop danish liquorice caramels halvah. Chocolate cake lemon drops liquorice sweet roll jujubes tootsie roll icing. Oat cake sesame snaps muffin soufflé jelly beans bear claw liquorice. Liquorice candy gummi bears bear claw sweet roll dessert carrot cake candy.', 5),
                                             ('Oat cake donut chocolate bar chocolate bar chocolate cake apple pie chocolate. Gingerbread macaroon sweet chocolate marshmallow cookie. Sesame snaps cheesecake pastry sugar plum carrot cake soufflé fruitcake tart. Chupa chups dragée biscuit soufflé sweet gummi bears marzipan.', 6),
                                             ('Cake jelly beans bonbon cheesecake. Candy pie jujubes ice cream marshmallow icing chupa chups halvah. Halvah tart chocolate bar cookie dragée croissant marshmallow.', 7),
                                             ('Oat cake topping marshmallow cookie jelly-o chocolate cake cupcake. Cookie brownie cotton candy sugar plum. Cake ice cream oat cake.', 8),
                                             ('Liquorice lollipop cake. Brownie sesame snaps candy jujubes chocolate cake dessert pastry candy canes. Oat cake liquorice cupcake jujubes muffin marzipan fruitcake danish pastry.', 9),
                                             ('Jujubes lemon drops chocolate candy canes. Gingerbread jelly beans fruitcake cake candy canes caramels. Liquorice icing ice cream dragée marshmallow pie sesame snaps.', 10),
                                             ('Lollipop danish marshmallow topping halvah cake marshmallow dragée brownie. Croissant chocolate cake muffin. Pastry pudding donut gingerbread. Chupa chups pudding sweet macaroon cookie.', 4),
                                             ('Apple pie gummies chocolate bar apple pie. Soufflé candy macaroon croissant sesame snaps jelly cotton candy. Wafer chocolate bar lollipop chupa chups macaroon. Jujubes tiramisu sweet roll bear claw icing tiramisu chocolate cake.', 7),
                                             ('Sweet powder cupcake gingerbread. Caramels dessert powder bear claw liquorice cheesecake. Lemon drops jujubes gummi bears muffin.', 1),
                                             ('Croissant apple pie cookie cupcake chupa chups sweet. Donut dessert donut marzipan tart tiramisu chocolate bar. Cookie jelly tart caramels chocolate cake cake biscuit macaroon.', 9),
                                             ('Brownie cheesecake cake cake. Tart liquorice lemon drops macaroon cupcake. Wafer sugar plum cupcake donut. Powder bonbon candy canes bear claw chocolate bar jelly muffin.', 2);