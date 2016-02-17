import media
import fresh_tomatoes
"""
The 6 movie instances
and a list of titles.
"""
the_wolf_of_wall_street = media.Movie("Toy Story", "In 1987, Jordan Belfort  \
(Leonardo DiCaprio) takes an entry-level job at a Wall Street brokerage firm. \
By the early 1990s, while still in his 20s, Belfort founds his own firm, Stratton \
and a merry band of brokers, Belfort makes a huge fortune by defrauding wealthy \
investors out of Oakmont. Together with his trusted lieutenant (Jonah Hill) millions. \
However, while Belfort and his cronies partake in a hedonistic brew of sex, drugs and \
thrills, the SEC and the FBI close in on his empire of excess.", "http://goo.gl/74MqGJ", "https://www.youtube.com/watch?v=tapaliUKxeA", 180)

the_revenant = media.Movie("The Revenant", "While exploring the uncharted wilderness \
in 1823, legendary frontiersman Hugh Glass (Leonardo DiCaprio) sustains injuries from \
a brutal bear attack. When his hunting team leaves him for dead, Glass must utilize his \
survival skills to find a way back home to his beloved family. Grief-stricken and fueled \
by vengeance, Glass treks through the wintry terrain to track down John Fitzgerald \
(Tom Hardy), the former confidant who betrayed and abandoned him.", "http://goo.gl/ldxBzV", "https://www.youtube.com/watch?v=YPz6Dw1iPwY", 156)

akira = media.Movie("Akira", "In 1988 the Japanese government drops an atomic bomb on Tokyo \
after ESP experiments on children go awry. In 2019, 31 years after nuking the city, Kaneda, a \
bike gang leader, tries to save his friend Tetsuo from a secret government project. He battles \
against anti-government activists, greedy politicians, irresponsible scientists and a powerful \
military leader until Tetsuo's supernatural power suddenly manifest. A final battle is fought in \
Tokyo Olympiad exposing the experiment's secrets.", "http://goo.gl/iuh1CN", "https://www.youtube.com/watch?v=ZHkCdsW_42I", 121)

fight_club = media.Movie("Fight Club", "A depressed man (Edward Norton) suffering from \
insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds \
himself living in his squalid house after his perfect apartment is destroyed. The two bored \
men form an underground club with strict rules and fight other men who are fed up with their \
mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support \
group crasher, attracts Tyler's attention.", "http://goo.gl/uEtjdX", "https://www.youtube.com/watch?v=HT3RaamnWYM", 139)

pineapple_express = media.Movie("Pineapple Express", "Stoner Dale Denton's (Seth Rogen) \
enjoyment of a rare strain of marijuana may prove fatal when he drops his roach in a \
panic after witnessing a murder. Upon learning that the fancy weed can be traced back to \
them, Dale and his dealer (James Franco) go on the lam, with a dangerous drug lord (Gary Cole) \
and crooked cop (Rosie Perez) hot on their heels.", "http://goo.gl/07yvXO", "https://www.youtube.com/watch?v=_GnV2u30oOU", 112)

the_raid_ii = media.Movie("The Raid II", "After surviving a bloody fight with powerful gangsters, \
rookie Jakarta cop Rama (Iko Uwais) thinks he can resume a normal life. However, his exploits during \
that fateful incident have attracted the attention of criminals even more deadly than the last. His \
family at risk, Rama has no choice but to go under cover. He gets himself thrown in prison, where he \
befriends the son of a prominent crime kingpin. Rama must lay his own life on the line to finally \
destroy the criminal empire.", "http://goo.gl/6RET2K", "https://www.youtube.com/watch?v=VK-LqFFPsGA", 150)
# The list of titles for the movie instances.
movies = [the_wolf_of_wall_street, the_revenant, akira, fight_club, pineapple_express, the_raid_ii]

# This string uses the list of movie instances as input to generate an HTML file and open it in the browser.
fresh_tomatoes.open_movies_page(movies)
