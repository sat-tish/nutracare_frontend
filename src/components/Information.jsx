
import infoImg from '../assets/images/illustrations/yoga2.jpg'

const Information = () => {
  return (
    <div className='w-full py-[50px] bg-white'>
        <h1 className="text-center text-2xl font-semibold mb-[50px]">Holistic Approach</h1>
      <div className='w-[90%] m-auto grid md:grid-cols-2'>
        <div className='w-full flex justify-center'>
            <img className='h-[400px]' src={infoImg} alt="" />
        </div>
        <div className='w-full min-h-[400px] items-center flex justify-center p-5'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita veniam error unde, in omnis nemo minima, natus dolorum dolorem eveniet impedit
                 esse recusandae corrupti blanditiis obcaecati dicta commodi! Corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sequi itaque totam nam fugiat alias ullam officiis repudiandae culpa a vero pariatur
                  illo perspiciatis ea, quia ab cumque mollitia? Magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati et doloremque dolorum non reiciendis quod aperiam ullam placeat veritatis officiis, suscipt, 
                  fugiat inventore alias necessitatibus laborum quasi dignissimos pariatur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam atque cum, 
                  ad, obcaecati enim error in neque, cupiditate recusandae eveniet. Aspernatur labore, temporibus neque 
                  sapiente fuga molestias tenetur dolores.</p>
        </div>
      </div>
    </div>
  )
}

export default Information
