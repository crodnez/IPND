import webbrowser

"""
This function is represents the
movie class file which is used
for the 'entertainment_center.py',
and initializes the class movie instance.
"""
class Movie():
    '''This class provides a way to store movie related information'''

    def __init__(self, movie_title, movie_storyline, poster_image,
                 trailer_youtube, duration_in_minutes):
        self.title = movie_title
        self.storyline = movie_storyline
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube
        self.duration_in_minutes = duration_in_minutes

    def show_trailer(self):
        webbrowser.open(self.trailer_youtube_url)
