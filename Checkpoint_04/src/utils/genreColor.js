export const getGenreColor = (genre) => {
  // Return specific color for each genre
  switch (genre) {
    case 'Entrepreneurship':
      return 'bg-pink-500'
    case 'Podcasts':
      return 'bg-purple-500'
    case 'Business':
      return 'bg-indigo-500'
    case 'News':
      return 'bg-blue-500'
    case 'History':
      return 'bg-green-500'
    case 'Society & Culture':
      return 'bg-red-500'
    case 'Religion & Spirituality':
      return 'bg-yellow-500'
    case 'True Crime':
      return 'bg-red-800'
    case 'Design':
      return 'bg-blue-500'


    default:
      return 'bg-gray-500'
  }
}

export const getGenreGradientColor = (genre) => {
  // Return specific color for each genre
  switch (genre) {
    case 'Entrepreneurship':
      return 'from-pink-900'
    case 'Podcasts':
      return 'from-purple-900'
    case 'Business':
      return 'from-indigo-900'
    case 'News':
      return 'from-blue-900'
    case 'History':
      return 'from-green-900'
    case 'Society & Culture':
      return 'from-red-900'
    case 'Religion & Spirituality':
      return 'from-yellow-900'
    case 'True Crime':
      return 'from-red-900'
    case 'Design':
      return 'from-blue-900'


    default:
      return 'from-blue-500'
  }
}